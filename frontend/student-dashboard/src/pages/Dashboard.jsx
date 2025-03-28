import React from 'react';
import { useNavigate } from 'react-router-dom'; // Hook for navigation
import Card from '../components/Card';
import Metric from '../components/Metric';
import ProgressBar from '../components/ProgressBar';
import DoughnutChart from '../components/DoughnutChart';
import NotificationItem from '../components/NotificationItem';
import { FaUser } from 'react-icons/fa'; // Import user icon

// Dashboard component receiving student data
function Dashboard({ data }) {
  const navigate = useNavigate(); // Initialize navigate function

  // Handler function to navigate when a card is clicked [cite: 104, 105]
  const handleCardClick = (path) => {
    if (path) {
        navigate(path); // Navigate to the specified path
    }
  };

  return (
    // Using React Fragment to group multiple top-level elements
    <>
      {/* Profile Card - Clickable */}
       <Card className="profile" onClick={() => handleCardClick('/profile')}> {/* [cite: 73] */}
         <div className="profile-pic-container"> {/* [cite: 73] */}
           {/* Placeholder for profile picture */}
           <div className="profile-placeholder" id="profile-placeholder"> {/* [cite: 73] */}
             <FaUser /> {/* User icon */} {/* [cite: 73] */}
           </div>
         </div>
         {/* Student's basic info */}
         <div className="profile-info"> {/* [cite: 74] */}
           <h3>{data.name}</h3> {/* [cite: 73] */}
           <p><strong>Student ID:</strong> {data.studentId}</p> {/* [cite: 73] */}
           <p><strong>Current Semester:</strong> {data.semester}</p> {/* [cite: 73] */}
           <p><strong>Department:</strong> {data.department}</p> {/* [cite: 74] */}
         </div>
       </Card>

      {/* Academic Summary Card - Clickable */}
       <Card className="academic-summary" onClick={() => handleCardClick('/academic-summary')}> {/* [cite: 74] */}
         <h3>Academic Summary</h3> {/* [cite: 74] */}
         {/* Container for GPA and Credit metrics */}
         <div className="metrics-container"> {/* [cite: 74] */}
           <Metric value={data.sgpa} label="SGPA" /> {/* [cite: 75] */}
           <Metric value={data.cgpa} label="CGPA" /> {/* [cite: 75] */}
           <Metric value={`${data.credits.earned}/${data.credits.total}`} label="Credits" /> {/* [cite: 76] */}
         </div>
         {/* List of enrolled courses */}
         <div className="enrolled-courses"> {/* [cite: 77] */}
           <h4>Enrolled Courses</h4> {/* [cite: 77] */}
           {/* Displaying first 4 courses as in original HTML */}
           {data.courses.slice(0, 4).map(course => (
             <div className="course-item" key={course.id}>{course.name}</div> /* [cite: 48, 77, 78] */
           ))}
         </div>
       </Card>

      {/* Attendance & Course Progress Card - Clickable */}
      <Card onClick={() => handleCardClick('/attendance-progress')}> {/* [cite: 79] */}
        <h3>Attendance & Course Progress</h3> {/* [cite: 79] */}
        {/* Chart container for the doughnut chart */}
        <div className="chart-container"> {/* [cite: 79, 306] */}
           {/* Doughnut chart component */}
          <DoughnutChart percentage={data.attendancePercentage} />
           {/* Text overlay showing the percentage */}
           <div className="chart-text" id="attendanceText">{data.attendancePercentage}%</div> {/* [cite: 79, 100, 307, 352] */}
        </div>
         {/* Container for course progress bars */}
         <div className="progress-container"> {/* [cite: 79, 308] */}
           <h4>Course Progress</h4> {/* [cite: 79] */}
           {/* Map through courses to display progress bars */}
           {data.courses.map(course => (
            <ProgressBar key={course.id} label={course.name} percentage={course.progress} /> /* [cite: 79, 80, 81, 82, 83, 84, 85, 86, 87] */
           ))}
         </div>
      </Card>

      {/* Notifications Card */}
      <Card className="notifications"> {/* [cite: 87] */}
         {/* Make the header clickable to navigate to the full notifications page */}
         <div onClick={() => handleCardClick('/notifications')} style={{ cursor: 'pointer', marginBottom: '10px' }}>
           <h3>Notifications</h3> {/* [cite: 87] */}
         </div>
         {/* Displaying first 5 notifications as in original HTML */}
         {data.notifications.slice(0, 5).map(notification => (
            <NotificationItem
                key={notification.id}
                type={notification.type} // Pass type for styling
                iconName={notification.icon} // Pass icon name string
                text={notification.text} // Pass notification text
            /> // [cite: 88, 89, 90, 91]
         ))}
      </Card>
    </>
  );
}

export default Dashboard;