import "./Options.css";

function Options({
  mode,
  randomOptions,
  onRandomChange,
  memorableOptions,
  onMemorableChange,
  pinOptions,
  onPinChange,
}) {
  // Random mode handlers
  const handleLengthChange = (e) => {
    onRandomChange({ ...randomOptions, length: parseInt(e.target.value) });
  };

  const handleCheckboxChange = (key) => {
    onRandomChange({ ...randomOptions, [key]: !randomOptions[key] });
  };

  // Memorable mode handlers
  const handleWordCountChange = (count) => {
    onMemorableChange({ ...memorableOptions, wordCount: count });
  };

  const handleSeparatorChange = (separator) => {
    onMemorableChange({ ...memorableOptions, separator });
  };

  const handleMemorableToggle = (key) => {
    onMemorableChange({ ...memorableOptions, [key]: !memorableOptions[key] });
  };

  // PIN mode handlers
  const handlePinLengthChange = (length) => {
    onPinChange({ ...pinOptions, length });
  };

  // Render Random Mode Options
  if (mode === "random") {
    return (
      <div className="options">
        <div className="option-group">
          <div className="option-header">
            <label htmlFor="length">Password Length</label>
            <span className="length-value">{randomOptions.length}</span>
          </div>
          <input
            type="range"
            id="length"
            min="8"
            max="50"
            value={randomOptions.length}
            onChange={handleLengthChange}
            className="length-slider"
          />
          <div className="length-labels">
            <span>8</span>
            <span>50</span>
          </div>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={randomOptions.uppercase}
              onChange={() => handleCheckboxChange("uppercase")}
            />
            <span className="checkmark"></span>
            <span className="checkbox-label">
              Uppercase
              <span className="example">ABC</span>
            </span>
          </label>

          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={randomOptions.lowercase}
              onChange={() => handleCheckboxChange("lowercase")}
            />
            <span className="checkmark"></span>
            <span className="checkbox-label">
              Lowercase
              <span className="example">abc</span>
            </span>
          </label>

          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={randomOptions.numbers}
              onChange={() => handleCheckboxChange("numbers")}
            />
            <span className="checkmark"></span>
            <span className="checkbox-label">
              Numbers
              <span className="example">123</span>
            </span>
          </label>

          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={randomOptions.symbols}
              onChange={() => handleCheckboxChange("symbols")}
            />
            <span className="checkmark"></span>
            <span className="checkbox-label">
              Symbols
              <span className="example">!@#</span>
            </span>
          </label>
        </div>
      </div>
    );
  }

  // Render Memorable Mode Options
  if (mode === "memorable") {
    return (
      <div className="options">
        <div className="option-group">
          <div className="option-header">
            <label>Number of Words</label>
          </div>
          <div className="preset-buttons">
            {[2, 3, 4, 5].map((count) => (
              <button
                key={count}
                className={`preset-btn ${
                  memorableOptions.wordCount === count ? "active" : ""
                }`}
                onClick={() => handleWordCountChange(count)}
              >
                {count} words
              </button>
            ))}
          </div>
        </div>

        <div className="option-group">
          <div className="option-header">
            <label>Separator</label>
          </div>
          <div className="preset-buttons">
            {[
              { value: "-", label: "Dash -" },
              { value: "_", label: "Under _" },
              { value: ".", label: "Dot ." },
              { value: "", label: "None" },
            ].map((sep) => (
              <button
                key={sep.value}
                className={`preset-btn ${
                  memorableOptions.separator === sep.value ? "active" : ""
                }`}
                onClick={() => handleSeparatorChange(sep.value)}
              >
                {sep.label}
              </button>
            ))}
          </div>
        </div>

        <div className="toggle-group">
          <label className="toggle-item">
            <input
              type="checkbox"
              checked={memorableOptions.capitalize}
              onChange={() => handleMemorableToggle("capitalize")}
            />
            <span className="toggle-switch"></span>
            <span className="toggle-label">Capitalize Words</span>
          </label>

          <label className="toggle-item">
            <input
              type="checkbox"
              checked={memorableOptions.includeNumber}
              onChange={() => handleMemorableToggle("includeNumber")}
            />
            <span className="toggle-switch"></span>
            <span className="toggle-label">Add Number</span>
          </label>
        </div>
      </div>
    );
  }

  // Render PIN Mode Options
  if (mode === "pin") {
    return (
      <div className="options">
        <div className="option-group">
          <div className="option-header">
            <label>PIN Length</label>
          </div>
          <div className="preset-buttons pin-presets">
            {[4, 6, 8, 10, 12].map((length) => (
              <button
                key={length}
                className={`preset-btn ${
                  pinOptions.length === length ? "active" : ""
                }`}
                onClick={() => handlePinLengthChange(length)}
              >
                {length} digits
              </button>
            ))}
          </div>
        </div>

        <div className="pin-info">
          <span className="info-icon">ℹ️</span>
          <span>
            PINs are numeric-only codes commonly used for devices, banking, and
            quick access.
          </span>
        </div>
      </div>
    );
  }

  return null;
}

export default Options;
