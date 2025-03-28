import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Importing necessary icons from react-icons
import { FaBars, FaBook, FaGraduationCap, FaChalkboardTeacher, FaTools, FaCalendarAlt, FaCog, FaTachometerAlt } from 'react-icons/fa';

// Array defining the menu items for the sidebar
const menuItems = [
  // Added Dashboard link
  { path: "/", icon: FaTachometerAlt, text: "Dashboard" },
  { path: "/academic-summary", icon: FaBook, text: "Academic Summary" }, // Match page [cite: 255]
  { path: "/semester-reports", icon: FaBook, text: "Semester Reports" }, // [cite: 68, 154, 203, 256, 330]
  { path: "/course-details", icon: FaGraduationCap, text: "Course Details" }, // [cite: 69, 155, 204, 257, 331]
  { path: "/attendance-progress", icon: FaCalendarAlt, text: "Attendance" }, // Match page
  { path: "/faculty-contacts", icon: FaChalkboardTeacher, text: "Faculty Contacts" }, // [cite: 69, 155, 204, 331]
  { path: "/resources", icon: FaTools, text: "Resources" }, // [cite: 70, 156, 205, 258, 332]
  { path: "/exam-schedule", icon: FaCalendarAlt, text: "Exam Schedule" }, // [cite: 71, 157, 206, 257, 333]
  { path: "/settings", icon: FaCog, text: "Settings" }, // [cite: 71, 157, 206, 258, 333]
];

// Sidebar component, receives expanded state and toggle function
function Sidebar({ isExpanded, toggleSidebar }) {
  const location = useLocation(); // Get current path

  return (
    // Apply 'expanded' class based on state
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`} id="sidebar"> {/* [cite: 19, 119, 176, 228, 288] */}
       {/* Hamburger icon to toggle sidebar */}
      <div className="hamburger" id="toggle-btn" onClick={toggleSidebar}> {/* [cite: 29, 68, 129, 154, 185, 203, 237, 255, 298, 330] */}
        <FaBars /> {/* [cite: 68, 154, 203, 255, 330] */}
      </div>
      {/* Container for menu options */}
      <div className="menu-options"> {/* [cite: 23, 68, 123, 154, 179, 203, 231, 255, 292, 330] */}
        {/* Map through menu items to create links */}
        {menuItems.map((item) => (
          <Link
             to={item.path}
             // Apply 'active' class if the current path matches the item's path
             className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
             key={item.path} // Use path as key
          >
            <item.icon /> {/* Render the icon component */} {/* [cite: 28, 68, 128, 154, 184, 203, 236, 255, 297, 330] */}
            {/* Text is visible only when sidebar is expanded (controlled by CSS) */}
            <span>{item.text}</span> {/* [cite: 68, 154, 203, 256, 330] */}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;