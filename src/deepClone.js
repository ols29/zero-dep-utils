/**
 * Deep clone a structured value using the platform structuredClone.
 * @template T
 * @param {T} value
 * @returns {T}
 */
export function deepClone(value) {
  return structuredClone(value);
}
