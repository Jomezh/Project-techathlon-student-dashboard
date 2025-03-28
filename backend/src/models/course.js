const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  course_id: { type: String, required: true, unique: true },
  course_name: { type: String, required: true },
  course_code: { type: String, required: true, unique: true },
  credits: { type: Number, required: true },  
  mode_of_study: {type: String, required: true},
  department: { type: String, required: true },
  semester_offered: { type: String, required: true }
});

module.exports = mongoose.model("Course", CourseSchema);
