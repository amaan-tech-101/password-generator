import "./History.css";

function History({ passwords, onSelect, onClear }) {
  if (passwords.length === 0) {
    return (
      <div className="history empty">
        <p>No passwords generated yet</p>
      </div>
    );
  }

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <div className="history">
      <div className="history-header">
        <h2>📜 Recent Passwords</h2>
        <button className="clear-btn" onClick={onClear}>
          Clear All
        </button>
      </div>
      <ul className="history-list">
        {passwords.map((item, index) => (
          <li
            key={index}
            className="history-item"
            onClick={() => onSelect(item.password)}
          >
            <span className="history-password">
              {item.password.substring(0, 20)}
              {item.password.length > 20 ? "..." : ""}
            </span>
            <span className="history-time">{formatTime(item.timestamp)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
