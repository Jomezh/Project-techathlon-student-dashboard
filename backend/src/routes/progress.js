const express = require("express");
const Progress = require("../models/Progress");
const authMiddleware = require("../auth.js/auth");

const router = express.Router();

// Get Student Progress
router.get("/", authMiddleware, async (req, res) => {
    try {
        const progress = await Progress.findOne({ user: req.user.id });
        if (!progress) return res.status(404).json({ error: "Progress not found" });

        res.json(progress);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update Progress
router.post("/update", authMiddleware, async (req, res) => {
    const { gpa, attendance, completedCredits } = req.body;

    try {
        let progress = await Progress.findOne({ user: req.user.id });

        if (!progress) {
            progress = new Progress({ user: req.user.id, gpa, attendance, completedCredits });
        } else {
            progress.gpa = gpa;
            progress.attendance = attendance;
            progress.completedCredits = completedCredits;
        }

        await progress.save();
        res.json({ message: "Progress updated successfully", progress });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
