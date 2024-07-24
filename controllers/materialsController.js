const Material = require('../models/material');

exports.createMaterial = async (req, res) => {
  const { title, content, createdBy } = req.body;
  try {
    const newMaterial = await Material.create({ title, content, createdBy });
    res.status(201).send(newMaterial);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getMaterials = async (req, res) => {
  try {
    const materials = await Material.findAll({ include: ['User'] });
    res.status(200).send(materials);
  } catch (error) {
    res.status(500).send(error);
  }
};
