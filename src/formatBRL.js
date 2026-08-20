/**
 * Format a numeric value as Brazilian Real currency (pt-BR).
 * @param {number|string} value
 * @returns {string}
 */
export function formatBRL(value) {
  const number = Number(value);
  if (Number.isNaN(number)) {
    throw new TypeError('formatBRL expects a numeric value');
  }
  return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
