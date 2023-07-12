const Sequelize = require('sequelize');
const sequelize = new Sequelize('bmw', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});
sequelize.query("CREATE DATABASE IF NOT EXISTS bmw;") // Create the database if it doesn't exist
.then(() => {
  })
  .catch((error) => {
    console.error('Unable to create the database:', error);
    sequelize.close();
  });
  
module.exports = sequelize;
