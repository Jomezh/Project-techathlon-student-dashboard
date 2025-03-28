import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import NotificationsPage from './pages/NotificationsPage';
import ProfilePage from './pages/ProfilePage';
import AcademicSummaryPage from './pages/AcademicSummaryPage';
import AttendanceProgressPage from './pages/AttendanceProgressPage';
import PlaceholderPage from './pages/PlaceholderPage'; // A generic page for links not yet implemented

import { studentData } from './data'; // Import centralized data
import './App.css'; // Import consolidated CSS

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); //

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <Router>
       {/* Add class to container based on sidebar state */}
      <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : ''}`}>
        <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
        {/* The main content area's margin is controlled by CSS based on .app-container class */}
        <div className="main-content">
           {/* Removed isSidebarExpanded prop */}
          <Navbar
            notificationCount={studentData.notificationCount} // Pass count
          />
          {/* Content area where pages will be rendered */}
          <div className="content" id="content"> {/* */}
            <Routes>
              {/* Route for the main dashboard */}
              <Route path="/" element={<Dashboard data={studentData} />} /> {/* */}
              {/* Route for notifications page */}
              <Route path="/notifications" element={<NotificationsPage notifications={studentData.notifications} />} /> {/* */}
              {/* Route for profile page */}
              <Route path="/profile" element={<ProfilePage profile={studentData} />} /> {/* */}
               {/* Route for academic summary page */}
              <Route path="/academic-summary" element={<AcademicSummaryPage summary={studentData} />} /> {/* */}
               {/* Route for attendance and progress page */}
              <Route path="/attendance-progress" element={<AttendanceProgressPage data={studentData} />} /> {/* */}

              {/* Placeholder routes for other sidebar links */}
              <Route path="/semester-reports" element={<PlaceholderPage title="Semester Reports" />} /> {/* */}
              <Route path="/course-details" element={<PlaceholderPage title="Course Details" />} /> {/* */}
              <Route path="/faculty-contacts" element={<PlaceholderPage title="Faculty Contacts" />} /> {/* */}
              <Route path="/resources" element={<PlaceholderPage title="Resources" />} /> {/* */}
              <Route path="/exam-schedule" element={<PlaceholderPage title="Exam Schedule" />} /> {/* */}
              <Route path="/settings" element={<PlaceholderPage title="Settings" />} /> {/* */}

              {/* Redirect any unknown route back to dashboard */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;