export const createSlug = (text = "") =>
  text
    .toString()
    .normalize("NFKD") // ✅ normalize unicode
    .replace(/[\u2010-\u2015]/g, "-") // normalize all dashes
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\./g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
