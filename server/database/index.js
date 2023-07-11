const Sequelize = require('sequelize');
const sequelize = new Sequelize('BMW', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  sync:false,
});

sequelize.query("CREATE DATABASE IF NOT EXISTS BMW;") // Create the database if it doesn't exist
  .then(() => {
  })
  .catch((error) => {
    console.error('Unable to create the database:', error);
    sequelize.close();
  });

module.exports = sequelize;