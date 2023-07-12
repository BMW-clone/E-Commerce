const { DataTypes } = require("sequelize");
const sequelize = require("../index")

const Client = sequelize.define("Client",{firstname:{
        type:DataTypes.STRING,
        validate:{
            notEmpty:true
        }
    }})

module.exports={Client}
