import { Lock, MessageSquareText, Hash } from "lucide-react";
import "./ModeTabs.css";

const modes = [
  {
    id: "random",
    label: "Password",
    icon: <Lock size={18} />,
  },
  {
    id: "memorable",
    label: "Passphrase",
    icon: <MessageSquareText size={18} />,
  },
  {
    id: "pin",
    label: "Numeric",
    icon: <Hash size={18} />,
  },
];

function ModeTabs({ activeMode, onModeChange }) {
  const activeIndex = modes.findIndex((m) => m.id === activeMode);

  return (
    <div className="mode-tabs" style={{ "--active-index": activeIndex }}>
      <div className="active-pill" />
      {modes.map((mode) => (
        <button
          key={mode.id}
          className={`mode-tab ${activeMode === mode.id ? "active" : ""}`}
          onClick={() => onModeChange(mode.id)}
        >
          <span className="mode-icon">{mode.icon}</span>
          <span className="mode-label">{mode.label}</span>
        </button>
      ))}
    </div>
  );
}

export default ModeTabs;
