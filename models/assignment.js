const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Assignment = sequelize.define('Assignment', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  deadline: { type: DataTypes.DATE, allowNull: false },
  createdBy: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } }
});

Assignment.belongsTo(User, { foreignKey: 'createdBy' });

module.exports = Assignment;
