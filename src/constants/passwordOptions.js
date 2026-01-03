/**
 * @fileoverview Default options and presets for password generation.
 */

/**
 * Default options for random password mode.
 */
export const DEFAULT_RANDOM_OPTIONS = {
  length: 16,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: false,
};

/**
 * Default options for memorable password mode.
 */
export const DEFAULT_MEMORABLE_OPTIONS = {
  wordCount: null,
  separator: null,
  capitalize: false,
  includeNumber: false,
};

/**
 * Default options for PIN mode.
 */
export const DEFAULT_PIN_OPTIONS = {
  length: null,
};

/**
 * Available word count presets for memorable passwords.
 */
export const WORD_COUNT_PRESETS = [2, 3, 4, 5];

/**
 * Available separator options for memorable passwords.
 */
export const SEPARATOR_OPTIONS = [
  { value: "-", label: "Dash -" },
  { value: "_", label: "Under _" },
  { value: ".", label: "Dot ." },
  { value: "", label: "None" },
];

/**
 * Available PIN length presets.
 */
export const PIN_LENGTH_PRESETS = [4, 6, 8, 10, 12];

/**
 * Password length constraints.
 */
export const PASSWORD_LENGTH = {
  MIN: 8,
  MAX: 50,
  DEFAULT: 16,
};
