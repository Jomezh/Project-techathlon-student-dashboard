import React from 'react';
// Import the map of icon names to components
import { iconMap } from '../data';

// NotificationItem component displays a single notification
// Takes type (for styling), iconName (to look up in iconMap), and text
function NotificationItem({ type, iconName, text }) {
   // Get the actual icon component from the map, default to null if not found
  const IconComponent = iconMap[iconName] || null;

  return (
    // Apply base 'notification' class and type-specific class (e.g., 'warning', 'alert')
    <div className={`notification ${type}`}> {/* [cite: 59, 88, 89, 90, 91, 138, 158, 159, 160, 161] */}
      {/* Render the icon if it exists */}
      {IconComponent && <IconComponent />} {/* [cite: 62, 88, 89, 90, 91, 141, 158, 159, 160, 161] */}
      {/* Display the notification text */}
      <div>{text}</div> {/* [cite: 88, 89, 90, 91, 158, 159, 160, 161] */}
    </div>
  );
}

export default NotificationItem;