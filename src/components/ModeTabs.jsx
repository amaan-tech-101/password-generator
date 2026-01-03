/**
 * @fileoverview Mode selection tabs component.
 * Renders the password/passphrase/pin mode switcher.
 */

import { MODES } from "../constants";
import "./ModeTabs.css";

/**
 * Renders mode selection tabs with sliding pill animation.
 * @param {Object} props
 * @param {string} props.activeMode - Currently selected mode ID.
 * @param {function} props.onModeChange - Callback when mode is changed.
 */
function ModeTabs({ activeMode, onModeChange }) {
  const activeIndex = MODES.findIndex((m) => m.id === activeMode);

  return (
    <div className="mode-tabs" style={{ "--active-index": activeIndex }}>
      <div className="active-pill" />
      {MODES.map((mode) => {
        const IconComponent = mode.icon;
        return (
          <button
            key={mode.id}
            className={`mode-tab ${activeMode === mode.id ? "active" : ""}`}
            onClick={() => onModeChange(mode.id)}
            role="tab"
            aria-selected={activeMode === mode.id}
            aria-label={`Switch to ${mode.label} mode`}
          >
            <span className="mode-icon">
              <IconComponent size={18} />
            </span>
            <span className="mode-label">{mode.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default ModeTabs;
