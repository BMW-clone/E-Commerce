const cors=require("cors")
const express=require("express")
const app=express()
const {sequelize}=require("./database/index")
const PORT=process.env.PORT||3000
require('dotenv').config()
//!importing routes
const Client=require("./router/client")
const UsedCarsRoute = require("./router/usedcars")
const NewCarsRoute=require("./router/newcars")
const Admin = require("./router/admin")
const Seller = require("./router/seller")
const Cart = require("./router/cart")

//!middlewears
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:"*"}));

//!using routes
app.use("/usedcars",UsedCarsRoute)
app.use("/client",Client) 
app.use("/newcars",NewCarsRoute)
app.use("/admin",Admin)
app.use("/seller",Seller)
app.use("/cart",Cart)


app.listen(PORT, function () {
  console.log("Listening on port $",{PORT});
});
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
     sequelize.sync({ force: false}).then(()=> console.log('Models are synchronized with the database.')
     ) // Change this to "true" when You need to drop and change Tables (auto change)
  })//Keep it False if you are testing
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

