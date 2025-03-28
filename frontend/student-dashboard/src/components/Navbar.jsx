import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaSignOutAlt } from 'react-icons/fa';

// Navbar component receiving notification count
// Removed unused isSidebarExpanded prop
function Navbar({ notificationCount }) {

  // Basic logout handler (replace with actual logic)
  const handleLogout = () => {
    console.log("Logout clicked");
    // Add your authentication logout logic here
  };

  return (
     // Navbar class applied
    <nav className="navbar"> {/* */}
      {/* Container for icons */}
      <div className="navbar-icons"> {/* */}
        {/* Notification Icon with Link and Badge */}
        <div className="navbar-icon"> {/* */}
           {/* Link to notifications page */}
          <Link to="/notifications"> {/* */}
            <FaBell /> {/* */}
            {/* Display badge only if count > 0 */}
            {notificationCount > 0 && (
              <div className="notification-badge">{notificationCount}</div> /* */
            )}
          </Link>
        </div>
         {/* Logout Icon */}
        <div className="navbar-icon" onClick={handleLogout}> {/* */}
          <FaSignOutAlt /> {/* */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;