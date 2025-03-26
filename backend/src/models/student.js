const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const studentSchema = new mongoose.Schema({
    _id: {type: String, required: true, unique: true},
    profilePicture: { type: String },
    name: { type: String, required: true },
    gender:{type: String},
    DoB:{type: Date, required: true},
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    semester: {type: Number, required: true},
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }], // Linking to courses
    createdAt: { type: Date, default: Date.now }
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next(); // Skip if password not modified
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  // Method to compare passwords
  UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;





