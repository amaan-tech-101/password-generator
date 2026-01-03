/**
 * @fileoverview Generator mode definitions used across the app.
 * Each mode defines a unique password generation strategy.
 */

import { Lock, MessageSquareText, Hash } from "lucide-react";

/**
 * Available password generation modes.
 * @type {Array<{id: string, label: string, icon: JSX.Element}>}
 */
export const MODES = [
  {
    id: "random",
    label: "Password",
    icon: Lock,
  },
  {
    id: "memorable",
    label: "Passphrase",
    icon: MessageSquareText,
  },
  {
    id: "pin",
    label: "Numeric",
    icon: Hash,
  },
];

/**
 * Default mode on app load.
 */
export const DEFAULT_MODE = "random";
