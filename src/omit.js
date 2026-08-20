/**
 * Create a new object with the given keys removed.
 * @param {object} obj
 * @param {string[]} keys
 * @returns {object}
 */
export function omit(obj, keys) {
  const blocked = new Set(keys);
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!blocked.has(key)) result[key] = obj[key];
  }
  return result;
}
