const { Model, DataTypes } = require('sequelize');
const sequelize= require('../index')
const Seller= require('../model/seller');



    const UsedCars =sequelize.define("UsedCars",{
        brand :{
            type: DataTypes.STRING,
            allowNull: false,
        },
         price :{
            type: DataTypes.INTEGER,
            allowNull: false,
         },
        category:{
            type: DataTypes.ENUM('SUV', 'COUPE', 'SEDAN', 'CABRIOLET'),
            allowNull: false, 
        },
        color :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        year :{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        mileage:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 0,
        },
        model:{
            type: DataTypes.STRING,
        },
    
          transmition:{
            type: DataTypes.ENUM('MANUAL', 'AUTOMATIC'),
            allowNull: false, 
          },
          hp:{
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          carburant:{
            type: DataTypes.ENUM('ESSENCE', 'DIESEL'),
            allowNull: false, 
          },
          rate:{
            type: DataTypes.INTEGER,
            allowNull: true,
          },
    
          status:{
            type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
            allowNull: false, 
            defaultValue: "pending",
          }
    
    
    });


usedCars.belongsTo(Seller, { foreignKey: 'seller_idseller' });
Seller.hasMany(usedCars)
       
        
    module.exports = UsedCars


// module.exports  ={ usedCars}




// usedCars.init(
//     {
//         brand :{
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//          price :{
//             type: DataTypes.INTEGER,
//             allowNull: false,
//          },
//         category:{
//             type: DataTypes.ENUM('SUV', 'COUPE', 'SEDAN', 'CABRIOLET'),
//             allowNull: false, 
//         },
//         color :{
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         year :{
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         image :{
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         mileage:{
//             type: DataTypes.STRING,
//             allowNull: false,
//             defaultValue: 0,
//         },
//         model:{
//             type: DataTypes.STRING,
//         },

//           transmition:{
//             type: DataTypes.ENUM('MANUAL', 'AUTOMATIC'),
//             allowNull: false, 
//           },
//           hp:{
//             type: DataTypes.INTEGER,
//             allowNull: false,
//           },
//           carburant:{
//             type: DataTypes.ENUM('ESSENCE', 'DIESEL'),
//             allowNull: false, 
//           },
//           rate:{
//             type: DataTypes.INTEGER,
//             allowNull: true,
//           },

//           status:{
//             type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
//             allowNull: false, 
//             defaultValue: "pending",
//           }
        
//     }
// )