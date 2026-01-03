import "./StrengthMeter.css";

function StrengthMeter({ strength }) {
  const { score, level, color, feedback } = strength;

  return (
    <div className="strength-meter">
      <div className="strength-header">
        <span className="strength-label">Password Strength</span>
        <span className="strength-level" style={{ color }}>
          {level}
        </span>
      </div>
      <div className="strength-bar-container">
        <div
          className="strength-bar"
          style={{
            width: `${score}%`,
            background: `linear-gradient(90deg, ${color} 0%, ${color}cc 100%)`,
          }}
        />
      </div>
      <p className="strength-feedback">{feedback}</p>
    </div>
  );
}

export default StrengthMeter;
