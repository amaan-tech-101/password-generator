import { Sun, Moon } from "lucide-react";
import "./ThemeToggle.css";

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      disabled
      style={{ opacity: 0.5, pointerEvents: "none", cursor: "default" }}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className={`toggle-track ${isDark ? "dark" : "light"}`}>
        <span className="toggle-thumb">
          {isDark ? (
            <Moon size={14} className="icon-moon" />
          ) : (
            <Sun size={14} className="icon-sun" />
          )}
        </span>
      </span>
    </button>
  );
}

export default ThemeToggle;
