const {DataTypes,Sequelize } = require("sequelize");
const sequelize = new Sequelize('bmw', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});
const db = {};
console.log("db",db);
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.UsedCars = require("../database/model/usedcars")(sequelize, DataTypes);

// db.Admin = require("../database/model/admin")(sequelize, DataTypes);
// db.Seller = require("../database/model/seller")(sequelize, DataTypes);
 db.Client = require("../database/model/client")(sequelize, DataTypes);
// db.NewCars = require("../database/model/newcars")(sequelize, DataTypes);
//!relations

db.Client.hasOne(db.UsedCars,{foreignKey:"client_idclient"})
db.UsedCars.belongsTo(Client)
sequelize.query("CREATE DATABASE IF NOT EXISTS bmw;") // Create the database if it doesn't exist
.then(() => {
  })
  .catch((error) => {
    console.error('Unable to create the database:', error);
    sequelize.close();
  });
  
module.exports = sequelize;
