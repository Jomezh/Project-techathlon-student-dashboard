import React from 'react';
import Card from '../components/Card';
import NotificationItem from '../components/NotificationItem';

// NotificationsPage component, receives list of notifications
function NotificationsPage({ notifications }) {
  return (
    // Using a Card as the main container for the page content
    <Card className="notifications-page-card"> {/* Using a specific class if needed, else just 'card' */}
       {/* Page Title */}
      <h3>Notifications</h3> {/* [cite: 158] */}
      {/* Container for the list of notifications */}
      <div className="notifications"> {/* [cite: 137, 158] */}
        {/* Check if there are notifications */}
        {notifications && notifications.length > 0 ? (
          // Map through the notifications array to display each item
          notifications.map(notification => (
            <NotificationItem
              key={notification.id} // Unique key for each item
              type={notification.type} // Pass type (alert, warning, suggestion) for styling
              iconName={notification.icon} // Pass icon name to look up in iconMap
              text={notification.text} // Pass the notification text
            /> // [cite: 158, 159, 160, 161]
          ))
        ) : (
          // Display a message if there are no notifications
          <p>No notifications found.</p>
        )}
      </div>
    </Card>
  );
}

export default NotificationsPage;