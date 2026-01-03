/**
 * Generates a random password based on options
 * @param {number} length - Password length
 * @param {boolean} includeUppercase - Include A-Z
 * @param {boolean} includeLowercase - Include a-z
 * @param {boolean} includeNumbers - Include 0-9
 * @param {boolean} includeSymbols - Include !@#$%^&*
 * @returns {string} Generated password
 */
export function generatePassword(
  length = 16,
  includeUppercase = true,
  includeLowercase = true,
  includeNumbers = true,
  includeSymbols = true
) {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  // Build character set based on options
  let chars = '';
  if (includeUppercase) chars += uppercase;
  if (includeLowercase) chars += lowercase;
  if (includeNumbers) chars += numbers;
  if (includeSymbols) chars += symbols;

  // Fallback to lowercase if nothing selected
  if (chars === '') chars = lowercase;

  // Generate password
  let password = '';
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  
  for (let i = 0; i < length; i++) {
    password += chars[array[i] % chars.length];
  }

  return password;
}
