const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('bmw', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.query("CREATE DATABASE IF NOT EXISTS bmw;") // Create the database if it doesn't exist
.then(() => {
  })
  .catch((error) => {
    console.error('Unable to create the database:', error);
    sequelize.close();
  });
  
module.exports = sequelize;
