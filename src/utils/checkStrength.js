/**
 * Calculate password strength score and details
 * @param {string} password - Password to check
 * @returns {object} Strength info: score (0-100), level, color, feedback
 */
export function checkStrength(password) {
  if (!password) {
    return {
      score: 0,
      level: 'None',
      color: '#a1a1aa',
      feedback: 'Choose options and generate'
    };
  }

  let score = 0;
  let feedback = '';

  // Length is the most important factor (up to 50 points)
  // 8 chars = 15, 12 chars = 25, 16 chars = 35, 20+ chars = 50
  if (password.length >= 8) score += 15;
  if (password.length >= 12) score += 10;
  if (password.length >= 16) score += 10;
  if (password.length >= 20) score += 8;
  if (password.length >= 24) score += 7;

  // Character variety (up to 40 points)
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^a-zA-Z0-9]/.test(password);
  
  const typesUsed = [hasLower, hasUpper, hasNumber, hasSymbol].filter(Boolean).length;
  
  // Points based on variety
  if (typesUsed === 1) score += 5;
  if (typesUsed === 2) score += 15;
  if (typesUsed === 3) score += 25;
  if (typesUsed === 4) score += 40;

  // Bonus for extra long passwords (up to 10 points)
  if (password.length >= 28) score += 5;
  if (password.length >= 32) score += 5;

  // Cap at 100
  score = Math.min(score, 100);

  // Determine level and color (monochrome scale - light to dark)
  let level, color;
  
  if (score < 25) {
    level = 'Weak';
    color = '#a1a1aa'; // Light gray
    feedback = 'Too short or limited variety';
  } else if (score < 45) {
    level = 'Fair';
    color = '#71717a'; // Medium gray
    feedback = 'Add more length or character types';
  } else if (score < 65) {
    level = 'Good';
    color = '#52525b'; // Dark gray
    feedback = 'Getting stronger!';
  } else if (score < 85) {
    level = 'Strong';
    color = '#3f3f46'; // Darker gray
    feedback = 'Nice and strong!';
  } else {
    level = 'Very Strong';
    color = '#18181b'; // Near black
    feedback = 'Excellent password!';
  }

  return {
    score,
    level,
    color,
    feedback
  };
}
