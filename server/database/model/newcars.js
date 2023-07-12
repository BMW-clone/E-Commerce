const { sequelize  ,DataTypes } = require('sequelize');
module.exports=(sequelize,DataTypes)=>{
const  NewCars = sequelize.define('NewCars', {
 
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
   
  category: {
    type: DataTypes.ENUM,
    values:['SUV','COUPE','SEDAN','CABRIOLET'],
    allowNull: false
  },

  color: {
    type: DataTypes.STRING,
    allowNull: false
  },

  year:{
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  image:{
    type: DataTypes.STRING,
    allowNull: false
  },
  mileage:{
    type:DataTypes.STRING,
    allowNull:false,
    defaultValue: 0
  },

  model:{
    type:DataTypes.STRING,
    allowNull:false
  },

  transmition:{
    type: DataTypes.ENUM,
    values:['MANUAL','AUTOMATIC'],
    allowNull:false
  },

  hp:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  
carburant:{
    type: DataTypes.ENUM,
    values:['ESSENCE','DIESEL'],
    allowNull:false

  },
 quantity:{
    type:DataTypes.INTEGER,
    allowNull:false

 },
 rate :{
    type:DataTypes.INTEGER,
    allowNull: true

 }
  
}, 


{

});
return NewCars
 
}
