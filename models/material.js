const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Material = sequelize.define('Material', {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.STRING, allowNull: false },
  createdBy: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } }
});

Material.belongsTo(User, { foreignKey: 'createdBy' });

module.exports = Material;
