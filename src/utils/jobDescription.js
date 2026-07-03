// Parses the recruitment API's job `description` into renderable blocks.
//
// The API stores descriptions as markdown but strips the newlines, so a job
// arrives as one long line: "# Job Title ## Summary ... * First bullet * ...".
// (Its `formattedDescription.blocks` is unreliable — it splits mid-sentence.)
// We restore the line breaks from the inline markers, then parse line by line.
// Descriptions that still contain real newlines, or plain text with no
// markdown at all, parse correctly too.

// Re-insert a newline before every block-level markdown marker. Markers only
// count when surrounded by whitespace, so "C#", "**bold**" and "3-5 years"
// are never split.
const restoreLineBreaks = (raw) => {
  let text = String(raw).replace(/\r\n?/g, "\n").trim();
  // Headings: "## Heading"
  text = text.replace(/(^|\s)(#{1,6})[ \t]+/g, "\n$2 ");
  // Bullets: a spaced "* " or "• " (a lone spaced asterisk is never part of
  // "**bold**", whose asterisks are flanked by "*" on one side).
  text = text.replace(/(^|\s)[*•][ \t]+/g, "\n* ");
  // Ordered items: "1. Item" — only before a capital, so a sentence like
  // "version 2. next" isn't mistaken for a list.
  text = text.replace(/(^|\s)(\d{1,2})\.[ \t]+(?=[A-Z])/g, "\n$2. ");
  return text;
};

// Because the newlines are stripped, a heading can absorb the paragraph that
// followed it ("## Job Summary The HR Head is responsible..."). Section names
// JDs commonly use, longest-first, to find where the real heading ends.
const KNOWN_SECTIONS = [
  "key performance indicators (kpis)",
  "key performance indicators",
  "roles and responsibilities",
  "preferred qualifications",
  "key responsibilities",
  "about the company",
  "preferred skills",
  "required skills",
  "job description",
  "responsibilities",
  "what you will do",
  "about the role",
  "qualifications",
  "what you'll do",
  "what we offer",
  "job overview",
  "requirements",
  "compensation",
  "job summary",
  "who we are",
  "experience",
  "education",
  "reporting",
  "about us",
  "benefits",
  "location",
  "overview",
  "summary",
  "skills",
  "salary",
  "perks",
];

// Words that typically start the sentence trailing a merged heading.
const SENTENCE_STARTERS = /^(The|This|These|We|Our|You|Your|It|A|An)$/;

// Split heading text that swallowed its body. Returns [heading, body] where
// either may be null: short marker-free text is all heading; text with no
// detectable boundary is demoted to a paragraph rather than shown as a
// paragraph-length heading.
const splitHeadingBody = (text) => {
  if (text.length <= 60 && !/[.!?](\s|$)/.test(text)) return [text, null];

  const lower = text.toLowerCase();
  for (const name of KNOWN_SECTIONS) {
    if (lower === name) return [text, null];
    if (lower.startsWith(name) && /\s/.test(text[name.length])) {
      return [text.slice(0, name.length), text.slice(name.length).trim()];
    }
  }

  const words = text.split(/\s+/);
  for (let i = 1; i < Math.min(words.length, 10); i++) {
    if (SENTENCE_STARTERS.test(words[i])) {
      return [words.slice(0, i).join(" "), words.slice(i).join(" ")];
    }
  }

  return [null, text];
};

/**
 * Parse a job description into blocks:
 *   { type: "heading", level: 1-6, text }
 *   { type: "list", ordered: boolean, items: string[] }
 *   { type: "paragraph", text }
 */
export const parseJobDescription = (raw, jobTitle = "") => {
  if (!raw || !String(raw).trim()) return [];

  const lines = restoreLineBreaks(raw)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const blocks = [];
  const pushListItem = (item, ordered) => {
    const last = blocks[blocks.length - 1];
    if (last?.type === "list" && last.ordered === ordered) {
      last.items.push(item);
    } else {
      blocks.push({ type: "list", ordered, items: [item] });
    }
  };

  for (const line of lines) {
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const [headText, bodyText] = splitHeadingBody(heading[2].trim());
      if (headText) {
        blocks.push({
          type: "heading",
          level: heading[1].length,
          text: headText,
        });
      }
      if (bodyText) {
        blocks.push({ type: "paragraph", text: bodyText });
      }
      continue;
    }

    const bullet = line.match(/^[*•-]\s+(.+)$/);
    if (bullet) {
      pushListItem(bullet[1].trim(), false);
      continue;
    }

    const ordered = line.match(/^\d{1,2}[.)]\s+(.+)$/);
    if (ordered) {
      pushListItem(ordered[1].trim(), true);
      continue;
    }

    blocks.push({ type: "paragraph", text: line });
  }

  // The page header already shows the job title — drop a leading
  // "# Job Title: ..." heading (or one that just repeats the title).
  const first = blocks[0];
  if (
    first?.type === "heading" &&
    (/^job\s*title\b/i.test(first.text) ||
      (jobTitle &&
        first.text.trim().toLowerCase() === jobTitle.trim().toLowerCase()))
  ) {
    blocks.shift();
  }

  return blocks;
};

// Split "**bold**" runs out of a text line. Returns [{ text, bold }, ...] so
// the renderer can wrap bold segments without dangerouslySetInnerHTML.
export const splitBoldSegments = (text) =>
  String(text)
    .split(/\*\*([^*]+)\*\*/g)
    .map((part, i) => ({ text: part, bold: i % 2 === 1 }))
    .filter((seg) => seg.text !== "");
