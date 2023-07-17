const {DataTypes,Sequelize} = require("sequelize");
const sequelize = new Sequelize('bmw', 'yacine', 'yacine251203**', {
  host: 'localhost',
  dialect: 'mysql',
  logging:false
});
const db = {};//! instance of sequlize
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Client = require("../database/model/client")(sequelize, DataTypes);
db.Seller=require("../database/model/seller")(sequelize,DataTypes)
db.usedcars=require("../database/model/usedcars")(sequelize,DataTypes);
db.Admin = require("../database/model/admin")(sequelize, DataTypes);
db.NewCars = require("../database/model/newcars")(sequelize, DataTypes);
db.Cart=require("../database/model/cart")(sequelize, DataTypes);
//!relations

//!seller can has many used cars(seller to used cars)
 db.Seller.hasMany(db.usedcars);
 db.usedcars.belongsTo(db.Seller);
//!admin can has many new cars(admin to new cars)
db.Admin.hasMany(db.NewCars)
db.NewCars.belongsTo(db.Admin,{
  onDelete: 'CASCADE',
  onUpdate: 'RESTRICT'
})

//! One client can have only one cart (one-to-one)
db.Client.hasOne(db.Cart);
db.Cart.belongsTo(db.Client);


// //! One cart can have many new cars (one-to-many)
db.Cart.hasMany(db.NewCars);
db.NewCars.belongsTo(db.Cart);

// //! One cart can have many used cars (one-to-many)
db.Cart.hasMany(db.UsedCar);
db.usedcars.belongsTo(db.Cart);


sequelize.query("CREATE DATABASE IF NOT EXISTS BMW;") //! Create the database if it doesn't exist
  .then(() => {
  
  })
  .catch((error) => {
    console.error('Unable to create the database:', error);
    sequelize.close();
  });
  
module.exports = {sequelize,db}
