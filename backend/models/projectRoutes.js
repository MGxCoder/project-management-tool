const express = require("express");
const auth = require("../middleware/auth");
const Project = require("../models/Project");
const router = express.Router();

// Create a project
router.post("/", auth, async (req, res) => {
  const { title, description } = req.body;
  try {
    const project = new Project({ title, description, user: req.user.id });
    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Get user projects with user details
router.get("/", auth, async (req, res) => {
  try {
    const projects = await Project.find().populate("user"); // ✅ Correct field
    // ✅ Fixed here
    res.json(projects);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
