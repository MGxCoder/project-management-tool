const express = require('express');
const Project = require('../models/Projects');

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  const projects = await Project.find().populate('assignedTo', 'name email');
  res.json(projects);
});

// Create a project
router.post('/', async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).json(project);
});

// Update project status
router.put('/:id', async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(project);
});

module.exports = router;
