import React, { useState, useEffect, useRef } from 'react';

// ProgressBar component with animation on view
function ProgressBar({ label, percentage }) {
  const [width, setWidth] = useState(0); // State to control the animated width
  const progressBarRef = useRef(null); // Ref to observe the progress bar element

  useEffect(() => {
    // --- ESLint Fix: Capture the ref's current value ---
    const node = progressBarRef.current;
    // ----------------------------------------------------

    const observer = new IntersectionObserver(
      (entries) => {
         // Check if the progress bar is intersecting (visible)
        const entry = entries[0];
        if (entry.isIntersecting) {
           // Animate the width to the target percentage
          setWidth(percentage);
           // Stop observing once animated - use the captured node
           // No need to check if 'node' exists here, as observe wouldn't have been called if it was null
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% is visible
      }
    );

    // Start observing the progress bar element using the captured node
    if (node) {
      observer.observe(node);
    }

    // Cleanup function to disconnect observer when component unmounts
    return () => {
      // --- ESLint Fix: Use the captured variable in cleanup ---
      if (node) {
        observer.unobserve(node);
      }
      // ------------------------------------------------------
    };
    // Dependency array remains the same, as the effect logic depends on the percentage changing
  }, [percentage]);

  return (
    // Attach the ref to the DOM element
    <div className="progress-item" ref={progressBarRef}> {/* */}
      {/* Label showing course name and percentage */}
      <div className="progress-label"> {/* */}
        <span>{label}</span>
        <span>{percentage}%</span> {/* */}
      </div>
      {/* Background of the progress bar */}
      <div className="progress-bar"> {/* */}
        {/* Filled part of the bar, width controlled by state */}
        <div
          className="progress-fill" /* */
          style={{ width: `${width}%` }} // Apply animated width
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;