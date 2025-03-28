import React from 'react';
import Card from '../components/Card';
import { FaUser } from 'react-icons/fa'; // Import user icon

// ProfilePage component, receives student profile data
function ProfilePage({ profile }) {
  return (
     // Using a Card as the container, adding a specific class for profile page styling
    <Card className="profile-page-card"> {/* [cite: 189, 207] */}
      {/* Container for the profile picture */}
      <div className="profile-pic-container"> {/* [cite: 192, 207] */}
         {/* Placeholder div for the picture */}
        <div className="profile-placeholder"> {/* [cite: 193, 207] */}
          <FaUser /> {/* User icon */} {/* [cite: 207] */}
        </div>
      </div>

      {/* Container for basic profile details below the picture */}
      <div className="profile-details"> {/* [cite: 195, 208] */}
        <h3>{profile.name}</h3> {/* Student Name */} {/* [cite: 208] */}
        <p>{profile.department} Department</p> {/* Department */} {/* [cite: 208] */}
        <p>Student ID: {profile.studentId}</p> {/* Student ID */} {/* [cite: 208] */}
      </div>

      {/* Grid layout for detailed information */}
      <div className="details-grid"> {/* [cite: 198, 208] */}
        {/* Detail Item: Current Semester */}
        <div className="detail-item"> {/* [cite: 199, 209] */}
          <div className="detail-item-label">Current Semester</div> {/* [cite: 200, 209] */}
          <div className="detail-item-value">{profile.semester}</div> {/* [cite: 201, 209] */}
        </div>
        {/* Detail Item: Date of Birth */}
        <div className="detail-item"> {/* [cite: 199, 209] */}
          <div className="detail-item-label">Date of Birth</div> {/* [cite: 200, 210] */}
          <div className="detail-item-value">{profile.dob}</div> {/* [cite: 201, 210] */}
        </div>
        {/* Detail Item: Email */}
        <div className="detail-item"> {/* [cite: 199, 210] */}
          <div className="detail-item-label">Email</div> {/* [cite: 200, 210] */}
          <div className="detail-item-value">{profile.email}</div> {/* [cite: 201, 211] */}
        </div>
        {/* Detail Item: Phone */}
        <div className="detail-item"> {/* [cite: 199, 211] */}
          <div className="detail-item-label">Phone</div> {/* [cite: 200, 211] */}
          <div className="detail-item-value">{profile.phone}</div> {/* [cite: 201, 211] */}
        </div>
        {/* Detail Item: Gender */}
        <div className="detail-item"> {/* [cite: 199, 212] */}
          <div className="detail-item-label">Gender</div> {/* [cite: 200, 212] */}
          <div className="detail-item-value">{profile.gender}</div> {/* [cite: 201, 212] */}
        </div>
        {/* Detail Item: Enrollment Date */}
        <div className="detail-item"> {/* [cite: 199, 212] */}
          <div className="detail-item-label">Enrollment Date</div> {/* [cite: 200, 213] */}
          <div className="detail-item-value">{profile.enrollmentDate}</div> {/* [cite: 201, 213] */}
        </div>
      </div>
    </Card>
  );
}

export default ProfilePage;