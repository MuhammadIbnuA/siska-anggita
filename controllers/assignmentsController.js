const Assignment = require('../models/assignment');

exports.createAssignment = async (req, res) => {
  const { title, description, deadline, createdBy } = req.body;
  try {
    const newAssignment = await Assignment.create({ title, description, deadline, createdBy });
    res.status(201).send(newAssignment);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.findAll({ include: ['User'] });
    res.status(200).send(assignments);
  } catch (error) {
    res.status(500).send(error);
  }
};
