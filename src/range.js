/**
 * Build an array of numbers from start (inclusive) to end (exclusive).
 * Supports a negative step for descending ranges.
 * @param {number} start
 * @param {number} end
 * @param {number} [step=1]
 * @returns {number[]}
 */
export function range(start, end, step = 1) {
  if (step === 0) throw new RangeError('step must not be zero');
  const result = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) result.push(i);
  } else {
    for (let i = start; i > end; i += step) result.push(i);
  }
  return result;
}
