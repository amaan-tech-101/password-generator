import { Sun, Moon } from "lucide-react";
import "./ThemeToggle.css";

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
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
