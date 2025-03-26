const mongoose = require("mongoose");

const AlertSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ["Unread", "Read"], default: "Unread" }
});

module.exports = mongoose.model("Alert", AlertSchema);
