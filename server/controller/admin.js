const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../index.js')

const  Admin = sequelize.define('Admin',{

 
    username: {
        type: DataTypes.STRING,
        allowNull: false
      },



},

{

})