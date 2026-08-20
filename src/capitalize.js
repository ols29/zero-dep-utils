/**
 * Uppercase the first character of a string.
 * Non string values and empty strings are returned unchanged.
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}
