const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // ✅ "user" exists, NOT "assignedTo"
});

module.exports = mongoose.model("Project", ProjectSchema);
