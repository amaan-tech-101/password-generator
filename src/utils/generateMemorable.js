/**
 * Generate a memorable password using random words
 * Format: word-word-word or Word-Word-Number
 */

// Common, easy-to-remember words
const words = [
  'apple', 'ocean', 'tiger', 'green', 'swift', 'cloud', 'piano', 'river',
  'maple', 'stone', 'flame', 'dream', 'frost', 'spark', 'honey', 'coral',
  'bloom', 'lunar', 'solar', 'vivid', 'crystal', 'ember', 'aurora', 'zephyr',
  'galaxy', 'nebula', 'phoenix', 'thunder', 'velvet', 'breeze', 'meadow', 'shadow',
  'silver', 'golden', 'cosmic', 'mystic', 'legend', 'summit', 'harbor', 'forest',
  'castle', 'knight', 'dragon', 'wizard', 'raven', 'falcon', 'orbit', 'quartz',
  'sunset', 'winter', 'spring', 'autumn', 'summer', 'garden', 'island', 'desert',
  'arctic', 'jungle', 'safari', 'voyage', 'anchor', 'bridge', 'canvas', 'horizon'
];

/**
 * Capitalize first letter of a word
 */
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/**
 * Get random word from the list
 */
function getRandomWord() {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return words[array[0] % words.length];
}

/**
 * Get random number with specified digits
 */
function getRandomNumber(digits = 2) {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  const max = Math.pow(10, digits);
  const min = Math.pow(10, digits - 1);
  return min + (array[0] % (max - min));
}

/**
 * Generate memorable password
 * @param {number} wordCount - Number of words (2-5)
 * @param {string} separator - Separator between words (-, _, .)
 * @param {boolean} capitalize - Capitalize each word
 * @param {boolean} includeNumber - Add number at end
 * @returns {string} Generated password
 */
export function generateMemorablePassword(
  wordCount = 3,
  separator = '-',
  shouldCapitalize = true,
  includeNumber = true
) {
  const selectedWords = [];
  
  for (let i = 0; i < wordCount; i++) {
    let word = getRandomWord();
    if (shouldCapitalize) {
      word = capitalize(word);
    }
    selectedWords.push(word);
  }
  
  let password = selectedWords.join(separator);
  
  if (includeNumber) {
    password += separator + getRandomNumber(2);
  }
  
  return password;
}
