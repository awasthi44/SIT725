const express = require('express');
const router = express.Router();
const { getProjects } = require('../controllers/projectController');

// Update route to pass socket.io (io) to controller
router.get('/api/projects', (req, res) => {
  getProjects(req, res, req.app.get('io'));
});

module.exports = router;
