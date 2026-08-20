/**
 * Convert a string into a URL safe slug.
 * Strips accents, lowercases, and collapses non alphanumeric runs into single hyphens.
 * @param {string} str
 * @returns {string}
 */
export function slugify(str) {
  return String(str)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
