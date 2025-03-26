const mongoose = require("mongoose");

const RecommendationSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  recommended_course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  reason: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Recommendation", RecommendationSchema);
