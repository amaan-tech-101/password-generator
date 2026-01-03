import { useState, useEffect } from "react";
import { Eye, EyeOff, Check, Copy } from "lucide-react";
import "./PasswordDisplay.css";

function PasswordDisplay({ password, onCopy, mode }) {
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Reset copied state when password changes
  useEffect(() => {
    setCopied(false);
  }, [password]);

  const handleCopyPassword = async () => {
    if (!password) return;

    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      if (onCopy) onCopy(password);

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy password", err);
    }
  };

  const getInputClass = () => {
    let classes = "password-input";
    if (mode === "pin") classes += " pin-style";
    if (mode === "memorable") classes += " memorable-style";
    return classes;
  };

  const getPlaceholder = () => {
    if (mode === "pin") return "####";
    if (mode === "memorable") return "correct-horse-battery-staple";
    return "P@ssw0rd123";
  };

  const getCopyText = () => {
    if (copied) return "Copied!";
    if (mode === "pin") return "Copy PIN";
    if (mode === "memorable") return "Copy Passphrase";
    return "Copy Password";
  };

  return (
    <div className="password-display">
      <div className="password-container">
        <input
          value={password}
          readOnly
          className={getInputClass()}
          placeholder={getPlaceholder()}
          type={showPassword ? "text" : "password"}
        />
        <button
          className="toggle-btn"
          onClick={() => setShowPassword(!showPassword)}
          title={showPassword ? "Hide password" : "Show password"}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <button
        className={`copy-btn ${copied ? "copied" : ""}`}
        onClick={handleCopyPassword}
        disabled={!password}
        aria-label={getCopyText()}
      >
        <span className="copy-icon">
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </span>
        {getCopyText()}
      </button>
    </div>
  );
}

export default PasswordDisplay;
