import React from 'react';

// Metric component to display a value and label (e.g., SGPA, CGPA)
function Metric({ value, label }) {
  return (
    <div className="metric"> {/* [cite: 44, 75, 76] */}
      <div className="metric-value">{value}</div> {/* [cite: 45, 75, 76] */}
      <div className="metric-label">{label}</div> {/* [cite: 46, 75, 76] */}
    </div>
  );
}

export default Metric;