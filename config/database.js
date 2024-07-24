const { Sequelize } = require('sequelize');
require('dotenv').config();

// Debugging: Log environment variables
console.log({
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_SSL: process.env.DB_SSL
});

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    dialectModule: require('mysql2'),
    dialectOptions: {
      ssl: {
        require: process.env.DB_SSL === 'true',
        rejectUnauthorized: false
      }
    }
  }
);

module.exports = sequelize;
