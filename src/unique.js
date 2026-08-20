/**
 * Remove duplicate values from an array, preserving first seen order.
 * @param {Array} array
 * @returns {Array}
 */
export function unique(array) {
  return [...new Set(array)];
}
