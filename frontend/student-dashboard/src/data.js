// Centralized data mimicking the content from HTML files

export const studentData = {
    name: "John Doe", //
    studentId: "CS2022156", //
    semester: "6th Semester", //
    department: "Computer Science", //
    dob: "May 15, 2000", //
    email: "john.doe@example.com", //
    phone: "+1 (555) 123-4567", //
    gender: "Male", //
    enrollmentDate: "September 2022", //
    sgpa: 8.7, //
    cgpa: 8.3, //
    credits: { earned: 126, total: 150 }, //
    attendancePercentage: 78, //
    courses: [
      { id: "CS401", name: "Advanced Algorithms", progress: 65, status: "Enrolled", grade: 8.5, internalMarks: 78, semester: 4, attendance: { attended: 7, total: 10 } }, //
      { id: "CS402", name: "Database Management Systems", progress: 78, status: "Completed", grade: 9.0, internalMarks: 85, semester: 4, attendance: { attended: 17, total: 20 } }, //
      { id: "CS403", name: "Computer Networks", progress: 42, status: "Enrolled", grade: 8.0, internalMarks: 72, semester: 4, attendance: { attended: 12, total: 15 } }, //
      { id: "CS404", name: "Software Engineering", progress: 85, status: "Completed", grade: 8.7, internalMarks: 80, semester: 4, attendance: { attended: 9, total: 12 } } //
    ],
     // Using notifications from index.html and notifications.html
    notifications: [
      { id: 1, type: "alert", icon: "FaBell", text: "Course Registration for Summer Semester begins on April 5th" }, //
      { id: 2, type: "warning", icon: "FaExclamationTriangle", text: "Assignment Deadline: Advanced Algorithms Project due in 3 days" }, //
      { id: 3, type: "warning", icon: "FaUserClock", text: "Attendance Alert: Below 75% in Computer Networks" }, //
      { id: 4, type: "suggestion", icon: "FaLightbulb", text: "Recommended Course: Machine Learning (CS501) for next semester" }, //
      { id: 5, type: "alert", icon: "FaCalendarAlt", text: "Mid-semester Examination Schedule published" } //
    ],
    notificationCount: 5 // Example count - Can be derived from notifications.length
  };
  
  // Mapping icon string names to actual react-icons components
  import { FaBell, FaExclamationTriangle, FaUserClock, FaLightbulb, FaCalendarAlt } from 'react-icons/fa';
  
  export const iconMap = {
    FaBell,
    FaExclamationTriangle,
    FaUserClock,
    FaLightbulb,
    FaCalendarAlt
  };