import { useState, useCallback, useEffect } from "react";
import { Lock, Hash, Dices, Brain } from "lucide-react";

import PasswordDisplay from "./components/PasswordDisplay";
import StrengthMeter from "./components/StrengthMeter";
import Options from "./components/Options";
import ModeTabs from "./components/ModeTabs";
import ThemeToggle from "./components/ThemeToggle";
import History from "./components/History";
import ParticlesBackground from "./components/ParticlesBackground";
import { generatePassword } from "./utils/generatePassword";
import { generateMemorablePassword } from "./utils/generateMemorable";
import { checkStrength } from "./utils/checkStrength";
import "./App.css";

function App() {
  // Theme state (persist in localStorage)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  // Apply theme class to document
  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Mode state
  const [mode, setMode] = useState("random");

  // Mode change effect
  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  // Password state
  const [password, setPassword] = useState("");

  // Random mode options
  const [randomOptions, setRandomOptions] = useState({
    length: 8,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  // Memorable mode options - all unchecked by default
  const [memorableOptions, setMemorableOptions] = useState({
    wordCount: null, // No preset selected
    separator: null, // No separator selected
    capitalize: false,
    includeNumber: false,
  });

  // PIN mode options - no preset selected
  const [pinOptions, setPinOptions] = useState({
    length: null, // No preset selected
  });

  // History state (load from localStorage)
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("passwordHistory");
    return saved ? JSON.parse(saved) : [];
  });

  // Strength state
  const [strength, setStrength] = useState(checkStrength(""));

  // Check if options are valid for generation
  const canGenerate = useCallback(() => {
    if (mode === "random") {
      // At least one character type must be selected
      return (
        randomOptions.uppercase ||
        randomOptions.lowercase ||
        randomOptions.numbers ||
        randomOptions.symbols
      );
    } else if (mode === "memorable") {
      // Word count and separator must be selected
      return (
        memorableOptions.wordCount !== null &&
        memorableOptions.separator !== null
      );
    } else if (mode === "pin") {
      // PIN length must be selected
      return pinOptions.length !== null;
    }
    return false;
  }, [mode, randomOptions, memorableOptions, pinOptions]);

  // Generate based on mode
  const handleGenerate = useCallback(() => {
    // Don't generate if options aren't selected
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
      newPassword = generatePassword(
        pinOptions.length,
        false, // no uppercase
        false, // no lowercase
        true, // numbers only
        false // no symbols
      );
    }

    setPassword(newPassword);

    // Check strength and trigger confetti if strong
    const newStrength = checkStrength(newPassword);
    setStrength(newStrength);
  }, [mode, randomOptions, memorableOptions, pinOptions, canGenerate]);

  // Add to history when copied
  const handleCopy = (copiedPassword) => {
    const newHistory = [
      { password: copiedPassword, timestamp: Date.now() },
      ...history.filter((item) => item.password !== copiedPassword),
    ].slice(0, 10);

    setHistory(newHistory);
    localStorage.setItem("passwordHistory", JSON.stringify(newHistory));
  };

  // Select from history
  const handleSelectFromHistory = (selectedPassword) => {
    setPassword(selectedPassword);
    setStrength(checkStrength(selectedPassword));
  };

  // Clear history
  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem("passwordHistory");
  };

  // Get title based on mode
  const getTitle = () => {
    switch (mode) {
      case "memorable":
        return "Memorable Password";
      case "pin":
        return "PIN Generator";
      default:
        return "Password Generator";
    }
  };

  // Get subtitle based on mode
  const getSubtitle = () => {
    switch (mode) {
      case "memorable":
        return "Easy to remember, hard to crack";
      case "pin":
        return "Secure numeric codes";
      default:
        return "Strong, unique passwords";
    }
  };

  // Get icon based on mode
  const getIcon = () => {
    switch (mode) {
      case "memorable":
        return <Brain size={40} className="icon-main" />;
      case "pin":
        return <Hash size={40} className="icon-main" />;
      default:
        return <Lock size={40} className="icon-main" />;
    }
  };

  // Get button text based on mode
  const getButtonText = () => {
    switch (mode) {
      case "memorable":
        return "Generate Passphrase";
      case "pin":
        return "Generate PIN";
      default:
        return "Generate Password";
    }
  };

  return (
    <div className="app">
      <ParticlesBackground isDark={isDark} />
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />

      <main className="container">
        <header className="header">
          <div className="logo">{getIcon()}</div>
          <h1>{getTitle()}</h1>
          <p>{getSubtitle()}</p>
        </header>

        <div className="generator-card">
          <ModeTabs activeMode={mode} onModeChange={handleModeChange} />

          <div className="mode-content" key={mode}>
            <PasswordDisplay
              password={password}
              onCopy={handleCopy}
              mode={mode}
            />

            {mode === "random" && password && (
              <StrengthMeter strength={strength} />
            )}

            <div className="divider"></div>

            <Options
              mode={mode}
              randomOptions={randomOptions}
              onRandomChange={setRandomOptions}
              memorableOptions={memorableOptions}
              onMemorableChange={setMemorableOptions}
              pinOptions={pinOptions}
              onPinChange={setPinOptions}
            />

            <button
              className={`generate-btn ${!canGenerate() ? "disabled" : ""}`}
              onClick={handleGenerate}
              disabled={!canGenerate()}
            >
              <span className="btn-icon">
                {mode === "pin" ? (
                  <Hash size={20} />
                ) : mode === "memorable" ? (
                  <Brain size={20} />
                ) : (
                  <Dices size={20} />
                )}
              </span>
              {getButtonText()}
            </button>
          </div>
        </div>

        <History
          passwords={history}
          onSelect={handleSelectFromHistory}
          onClear={handleClearHistory}
        />

        <footer className="footer">
          <p>
            © 2026{" "}
            <a
              href="https://x.com/dev_amaan"
              target="_blank"
              rel="noopener noreferrer"
              className="author-link"
            >
              Mohammad Amaan
            </a>
            . Built with ❤️ using React & CSS
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
