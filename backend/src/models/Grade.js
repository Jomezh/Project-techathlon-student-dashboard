const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  gradePoint: { type: Number, required: true }, // Grade points (0–10)
  internalMarks: { type: Number, required: true }, // Internal assessment marks
  semester: { type: Number, required: true }, // Semester for which grade is recorded
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Grade', GradeSchema);
