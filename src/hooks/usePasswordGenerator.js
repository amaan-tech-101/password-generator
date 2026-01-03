/**
 * @fileoverview Custom hook for password generation logic.
 * Encapsulates state management and generation functions.
 */

import { useState, useCallback } from "react";
import { generatePassword, generateMemorablePassword, checkStrength } from "../utils";
import {
  DEFAULT_RANDOM_OPTIONS,
  DEFAULT_MEMORABLE_OPTIONS,
  DEFAULT_PIN_OPTIONS,
  DEFAULT_MODE,
} from "../constants";

/**
 * Custom hook that manages password generation state and logic.
 * @returns {Object} Password generation state and handlers.
 */
export function usePasswordGenerator() {
  const [mode, setMode] = useState(DEFAULT_MODE);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(checkStrength(""));

  // Mode-specific options
  const [randomOptions, setRandomOptions] = useState(DEFAULT_RANDOM_OPTIONS);
  const [memorableOptions, setMemorableOptions] = useState(DEFAULT_MEMORABLE_OPTIONS);
  const [pinOptions, setPinOptions] = useState(DEFAULT_PIN_OPTIONS);

  /**
   * Check if current options allow generation.
   */
  const canGenerate = useCallback(() => {
    if (mode === "random") {
      return (
        randomOptions.uppercase ||
        randomOptions.lowercase ||
        randomOptions.numbers ||
        randomOptions.symbols
      );
    } else if (mode === "memorable") {
      return memorableOptions.wordCount !== null && memorableOptions.separator !== null;
    } else if (mode === "pin") {
      return pinOptions.length !== null;
    }
    return false;
  }, [mode, randomOptions, memorableOptions, pinOptions]);

  /**
   * Generate password based on current mode and options.
   */
  const handleGenerate = useCallback(() => {
    if (!canGenerate()) return;

    let newPassword = "";

    if (mode === "random") {
      newPassword = generatePassword(
        randomOptions.length || 16,
        randomOptions.uppercase,
        randomOptions.lowercase,
        randomOptions.numbers,
        randomOptions.symbols
      );
    } else if (mode === "memorable") {
      newPassword = generateMemorablePassword(
        memorableOptions.wordCount,
        memorableOptions.separator,
        memorableOptions.capitalize,
        memorableOptions.includeNumber
      );
    } else if (mode === "pin") {
      newPassword = generatePassword(pinOptions.length, false, false, true, false);
    }

    setPassword(newPassword);
    setStrength(checkStrength(newPassword));
  }, [mode, randomOptions, memorableOptions, pinOptions, canGenerate]);

  return {
    // State
    mode,
    password,
    strength,
    randomOptions,
    memorableOptions,
    pinOptions,
    canGenerate: canGenerate(),

    // Setters
    setMode,
    setPassword,
    setRandomOptions,
    setMemorableOptions,
    setPinOptions,
    setStrength,

    // Actions
    handleGenerate,
  };
}
