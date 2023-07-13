const {DataTypes,sequelize} = require("sequelize");
module.exports=(sequelize,DataTypes)=>{
    const Seller = sequelize.define("Seller",{
        firstname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false,
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
        defaultValue:"seller",
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
    return Seller
    
}