/**
 * Create a debounced version of a function that delays invocation
 * until `wait` milliseconds have elapsed since the last call.
 * @param {Function} fn
 * @param {number} [wait=0]
 * @returns {Function}
 */
export function debounce(fn, wait = 0) {
  let timer;
  return function debounced(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}
