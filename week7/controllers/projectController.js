const Project = require('../models/Project');

const getProjects = async (req, res, io) => {  // Accept io as a parameter
  try {
    const projects = await Project.find({});
    res.status(200).json({ statusCode: 200, data: projects, message: 'Success' });

    // Emit project data to clients connected via socket
    io.emit('projects', { message: 'Projects updated', data: projects });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
  }
};

module.exports = { getProjects };
