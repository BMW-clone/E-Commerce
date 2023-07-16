const {  DataTypes,sequelize} = require('sequelize');

module.exports =(sequelize , DataTypes) =>{
 
    const Admin =sequelize.define("Admin",{
        firstname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        username :{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email :{
            type: DataTypes.STRING,
            allowNull: false,
        },
     
        password :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        profilepic :{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnDPwJq4k5TRk6_PBBWbVkU9vCS4fYfdR4eYQbwkNBosZa2qTYlwE4YtEpP7P1C89DQw&usqp=CAU"
        },
         role:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "admin",

         },

    },{


    });
   
    return Admin

}