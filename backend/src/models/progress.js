const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    gpa: { type: Number, required: true },
    attendance: { type: Number, required: true },
    completedCredits: { type: Number, required: true }
});

module.exports = mongoose.model("Progress", ProgressSchema);
