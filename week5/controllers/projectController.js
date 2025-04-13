const Project = require('../models/Project');

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json({ statusCode: 200, data: projects, message: 'Success' });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
  }
};

module.exports = { getProjects };