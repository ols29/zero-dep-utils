/**
 * Validate a Brazilian CNPJ number, with or without mask.
 * Checks both verification digits and rejects repeated digit sequences.
 * @param {string|number} cnpj
 * @returns {boolean}
 */
export function isValidCNPJ(cnpj) {
  const digits = String(cnpj).replace(/\D/g, '');
  if (digits.length !== 14 || /^(\d)\1{13}$/.test(digits)) return false;
  const checkDigit = (length) => {
    const weights = length === 12
      ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
      : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;
    for (let i = 0; i < length; i += 1) {
      sum += Number(digits[i]) * weights[i];
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };
  return checkDigit(12) === Number(digits[12]) && checkDigit(13) === Number(digits[13]);
}
