/**
 * Group array items into an object keyed by the result of a selector.
 * @param {Array} array
 * @param {(item: any, index: number) => string} fn
 * @returns {Record<string, Array>}
 */
export function groupBy(array, fn) {
  const result = {};
  array.forEach((item, index) => {
    const key = fn(item, index);
    (result[key] ||= []).push(item);
  });
  return result;
}
