const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('bmw', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  sync:false,
});
const db = {};// instance of sequlize
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.UsedCars = require("../database/model/usedcars")(sequelize, DataTypes);
// db.Client = require("../database/model/client")(sequelize, DataTypes);
db.UsedCars.belongsTo(db.Seller, { foreignKey: 'seller_idseller' });
db.Seller.hasMany(db.UsedCars , { foreignKey: 'seller_idseller' })
db.Admin = require("../database/model/admin")(sequelize, DataTypes);
db.NewCars = require("../database/model/newcars")(sequelize, DataTypes);
db.Admin.hasMany(db.NewCars)
db.NewCars.belongsTo({
  onDelete: 'CASCADE',
  onUpdate: 'RESTRICT'
})
sequelize.query("CREATE DATABASE IF NOT EXISTS BMW;") // Create the database if it doesn't exist
  .then(() => {
  console.log('ahla salim');
  })
  .catch((error) => {
    console.error('Unable to create the database:', error);
    sequelize.close();
  });
  
module.exports = sequelize;
