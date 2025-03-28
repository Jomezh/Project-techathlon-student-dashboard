import React from 'react';
import Card from '../components/Card';

// AcademicSummaryPage component, receives summary data (including courses)
function AcademicSummaryPage({ summary }) {
  return (
     // Using a Card as the main container for the page
    <Card className="academic-summary-page-card"> {/* [cite: 241, 259] */}
       {/* Header section containing title and overall stats */}
      <div className="summary-header"> {/* [cite: 249, 259] */}
        <h2>Academic Summary</h2> {/* Page Title */} {/* [cite: 259] */}
         {/* Flex container for summary statistics (SGPA, CGPA, Credits) */}
        <div className="summary-stats"> {/* [cite: 250, 259] */}
          {/* Individual stat item for SGPA */}
          <div className="summary-stat"> {/* [cite: 251, 259] */}
            <div className="summary-stat-label">SGPA</div> {/* [cite: 252, 260] */}
            <div className="summary-stat-value">{summary.sgpa}</div> {/* [cite: 253, 260] */}
          </div>
          {/* Individual stat item for CGPA */}
          <div className="summary-stat"> {/* [cite: 251, 260] */}
            <div className="summary-stat-label">CGPA</div> {/* [cite: 252, 261] */}
            <div className="summary-stat-value">{summary.cgpa}</div> {/* [cite: 253, 261] */}
          </div>
           {/* Individual stat item for Credits */}
          <div className="summary-stat"> {/* [cite: 251, 261] */}
            <div className="summary-stat-label">Credits</div> {/* [cite: 252, 261] */}
            <div className="summary-stat-value">{`${summary.credits.earned}/${summary.credits.total}`}</div> {/* [cite: 253, 262] */}
          </div>
        </div>
      </div>

      {/* Table displaying detailed course information */}
      <table> {/* [cite: 244, 262] */}
        <thead> {/* Table Header */} {/* [cite: 263] */}
          <tr>
            <th>Course Code</th> {/* [cite: 263] */}
            <th>Course Name</th> {/* [cite: 263] */}
            <th>Enrollment Status</th> {/* [cite: 263] */}
            <th>Grade Points</th> {/* [cite: 264] */}
            <th>Internal Marks</th> {/* [cite: 264] */}
            <th>Semester</th> {/* [cite: 264] */}
          </tr>
        </thead>
        <tbody> {/* Table Body */} {/* [cite: 265] */}
          {/* Check if course data exists */}
          {summary.courses && summary.courses.length > 0 ? (
             // Map through the courses array to create table rows
            summary.courses.map(course => (
              <tr key={course.id}> {/* Unique key for each row */}
                <td>{course.id}</td> {/* Course Code */} {/* [cite: 265, 267, 269, 271] */}
                <td>{course.name}</td> {/* Course Name */} {/* [cite: 265, 267, 269, 271] */}
                <td>{course.status}</td> {/* Enrollment Status */} {/* [cite: 266, 267, 269, 271] */}
                <td>{course.grade !== undefined ? course.grade.toFixed(1) : 'N/A'}</td> {/* Grade Points */} {/* [cite: 266, 268, 270, 271] */}
                <td>{course.internalMarks !== undefined ? course.internalMarks : 'N/A'}</td> {/* Internal Marks */} {/* [cite: 266, 268, 270, 272] */}
                <td>{course.semester}</td> {/* Semester */} {/* [cite: 266, 268, 270, 272] */}
              </tr>
            ))
          ) : (
             // Display a message if no course data is available
            <tr>
              <td colSpan="6">No course data available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
}

export default AcademicSummaryPage;