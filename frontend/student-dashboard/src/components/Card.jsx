import React from 'react';

// Simple Card component wrapper
// Takes children, className for additional styling, and optional onClick handler
function Card({ children, className = '', onClick }) {
  // Determine if the card is clickable based on the presence of onClick prop
  const isClickable = !!onClick;
   // Combine base 'card' class with any additional classes and 'clickable-card' if applicable
  const cardClassName = `card ${className} ${isClickable ? 'clickable-card' : ''}`.trim(); // [cite: 34, 73, 74, 79, 134, 158, 189, 207, 241, 259, 303, 335]

  return (
    // Render the div with combined classes and onClick handler
    <div className={cardClassName} onClick={onClick}>
      {children} {/* Render content passed to the card */}
    </div>
  );
}

export default Card;