/**
 * Shorten a string to a maximum length, appending a suffix when it is cut.
 * @param {string} str
 * @param {number} length total maximum length including the suffix
 * @param {string} [suffix="..."]
 * @returns {string}
 */
export function truncate(str, length, suffix = '...') {
  const value = String(str);
  if (value.length <= length) return value;
  return value.slice(0, Math.max(0, length - suffix.length)) + suffix;
}
