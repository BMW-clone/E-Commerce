const {DataTypes} = require("sequelize");
 const sequelize = require("../index").
 console.log(module.exports)
module.exports=(sequelize,DataTypes)=>{
    console.log("DataTypes",DataTypes);
    const Client = sequelize.define("Client",{firstname:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    profilepic:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    role:{
        type:DataTypes.STRING,
        defaultValue:"client",
        allowNull:false,
    },
    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    coverpic:{
        type:DataTypes.STRING,
        allowNull:false,
    }
}
    )
    
    return Client
    
}