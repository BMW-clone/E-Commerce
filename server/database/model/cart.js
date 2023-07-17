const {DataTypes,sequelize} = require("sequelize");
module.exports=(sequelize,DataTypes)=>{

const Cart = sequelize.define('Cart', {
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image:{
    type: DataTypes.STRING,
    allowNull: false,
  }
})
  
return Cart 
}

