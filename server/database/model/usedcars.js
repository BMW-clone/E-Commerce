const { Model, DataTypes } = require('sequelize');
const sequelize= require('../index')
const Seller= require('../model/seller')

class usedCars extends Model{}

usedCars.init(
    {
        brand :{
            type: DataTypes.STRING,
            allowNull: false,
        },
         price :{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
         },
        category:{
            type: DataTypes.ENUM('SUV', 'COUPE', 'SEDAN', 'CABRIOLET'),
            allowNull: false, 
        },
        color :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        
          
       
        
    }
)