import React from 'react';
import Card from '../components/Card';
import DoughnutChart from '../components/DoughnutChart';
import ProgressBar from '../components/ProgressBar';

// AttendanceProgressPage component receiving student data
function AttendanceProgressPage({ data }) {

  // Determine overall attendance percentage, default to 0 if undefined
  const overallAttendance = data.attendancePercentage !== undefined ? data.attendancePercentage : 0;

  return (
    // Using Card as the main container for the page
    <Card className="attendance-progress-page-card"> {/* [cite: 303] */}
      {/* Title for the page */}
      <h3>Attendance & Course Progress</h3>

      {/* Section for the overall attendance chart */}
      <div className="overall-attendance-section">
        <h4>Overall Attendance</h4>
         {/* Container for the Doughnut chart and text overlay */}
        <div className="chart-container"> {/* [cite: 306, 317] */}
          <DoughnutChart percentage={overallAttendance} />
          {/* Text displaying the percentage in the center of the chart */}
          <div className="chart-text" id="attendanceText">{overallAttendance}%</div> {/* [cite: 307, 318, 352] */}
        </div>
      </div>

       {/* Section displaying attendance breakdown by course */}
      <div className="attendance-summary"> {/* [cite: 322, 335] */}
        <h4>Attendance By Course</h4>
        {/* Container for the list of course attendance items */}
        <div id="course-attendance-list">
           {/* Check if course data with attendance exists */}
          {data.courses && data.courses.length > 0 ? (
            data.courses.map(course => {
              // Calculate percentage for each course, handle missing data
              const attended = course.attendance?.attended ?? 0;
              const total = course.attendance?.total ?? 0;
              const percentage = total > 0 ? Math.round((attended / total) * 100) : 0; // [cite: 355, 356]

              return (
                // Display each course's attendance details
                <div className="course-attendance-item" key={course.id + '-att'}> {/* [cite: 323, 358] */}
                  <p>
                    <strong>{course.name}:</strong> {percentage}% ({attended}/{total}) {/* [cite: 358] */}
                  </p>
                </div>
              );
            })
          ) : (
            // Message if no course attendance data is found
            <p>No course-specific attendance data available.</p>
          )}
        </div>
      </div>


      {/* Section displaying course progress */}
      <div className="progress-container"> {/* [cite: 308, 324] */}
        <h4>Course Progress</h4>
         {/* Check if course data exists */}
        {data.courses && data.courses.length > 0 ? (
          // Map through courses to display progress bars
          data.courses.map(course => (
            <ProgressBar
              key={course.id + '-prog'} // Unique key
              label={course.name} // Course name as label
              percentage={course.progress !== undefined ? course.progress : 0} // Course progress percentage
            /> /* [cite: 336, 337, 338, 339, 340, 341, 342, 343] */
          ))
        ) : (
           // Message if no course progress data is found
          <p>No course progress data available.</p>
        )}
      </div>
    </Card>
  );
}

export default AttendanceProgressPage;