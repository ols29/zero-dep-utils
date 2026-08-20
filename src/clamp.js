/**
 * Restrict a number to the inclusive range [min, max].
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
  if (min > max) throw new RangeError('min must not be greater than max');
  return Math.min(Math.max(value, min), max);
}
