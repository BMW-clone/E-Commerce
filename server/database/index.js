const {DataTypes,Sequelize } = require("sequelize");
const sequelize = new Sequelize('bmw', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});
const used=require("../database/model/usedcars")
const db = {};
console.log("db",db);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.UsedCars = used(sequelize, DataTypes);
// db.Admin = require("../database/model/admin")(sequelize, DataTypes);
// db.Seller = require("../database/model/seller")(sequelize, DataTypes);
 db.Client = require("../database/model/client")(sequelize, DataTypes);
// db.NewCars = require("../database/model/newcars")(sequelize, DataTypes);
//!relations

// db.Client.hasOne(db.UsedCars)
// db.UsedCars.belongsTo(db.Client)
sequelize.query("CREATE DATABASE IF NOT EXISTS bmw;") // Create the database if it doesn't exist
.then(() => {
  })
  .catch((error) => {
    console.error('Unable to create the database:', error);
    sequelize.close();
  });
  
module.exports = sequelize;
