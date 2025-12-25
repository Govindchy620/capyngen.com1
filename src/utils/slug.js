export const createSlug = (text = "") =>
  text
    .toLowerCase()
    .replace(/[–—]/g, "-") // normalize unicode dashes
    .replace(/&/g, "and") // & → and
    .replace(/\./g, "") // remove dots (No.1 → No1)
    .replace(/[^a-z0-9]+/g, "-") // remove punctuation
    .replace(/-+/g, "-") // collapse dashes
    .replace(/^-|-$/g, ""); // trim dashes
