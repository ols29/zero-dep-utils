/**
 * Split an array into groups of a given size.
 * @param {Array} array
 * @param {number} size positive integer
 * @returns {Array<Array>}
 */
export function chunk(array, size) {
  if (!Array.isArray(array)) throw new TypeError('chunk expects an array');
  if (!Number.isInteger(size) || size <= 0) {
    throw new RangeError('size must be a positive integer');
  }
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
