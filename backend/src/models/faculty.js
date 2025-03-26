const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema({
  faculty_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  assigned_courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});

module.exports = mongoose.model("Faculty", FacultySchema);
