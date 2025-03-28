require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Student = require("../backend/src/models/Student"); // Adjust path based on your structure

// Connect to MongoDB Atlas
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB Atlas...");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1);
    }
};

// Sample students
const students = [
    {
        _id: "S101",
        profilePicture: "https://example.com/profile1.jpg",
        name: "John Doe",
        gender: "Male",
        DoB: new Date("2003-05-15"),
        password: "password123",
        email: "johndoe@example.com",
        age: 21,
        semester: 4,
        enrolledCourses: [], // Add course ObjectIds if needed
    },
    {
        _id: "S102",
        profilePicture: "https://example.com/profile2.jpg",
        name: "Jane Smith",
        gender: "Female",
        DoB: new Date("2002-09-22"),
        password: "securepass456",
        email: "janesmith@example.com",
        age: 22,
        semester: 5,
        enrolledCourses: [],
    }
];

// Hash passwords before inserting
const hashPasswords = async (students) => {
    for (let student of students) {
        const salt = await bcrypt.genSalt(10);
        student.password = await bcrypt.hash(student.password, salt);
    }
};

// Seed students
const seedStudents = async () => {
    try {
        await connectDB();
        await Student.deleteMany(); // Clear existing students
        console.log("🗑️ Existing students deleted.");

        await hashPasswords(students);
        await Student.insertMany(students);

        console.log("🎉 Student data seeded successfully!");
        process.exit();
    } catch (error) {
        console.error("❌ Error seeding students:", error);
        process.exit(1);
    }
};

seedStudents();
