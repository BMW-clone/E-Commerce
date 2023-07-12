const {  DataTypes } = require('sequelize');
const sequelize= require('../index')


module.exports =(sequelize , DataTypes) =>{
 
    const Admin =sequelize.define("Admin",{
        username :{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email :{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
     
        password :{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        profilpic :{
            type: DataTypes.STRING,
            allowNull: false,
          
        },
         role:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "admin",

         },
         phoneNumber:{
            type: DataTypes.STRING,
            allowNull: false,
      

         },



    },{});
   
    return Admin

}