const cors=require("cors")
const express=require("express")
const app=express()
const sequelize=require("./database/index")
const PORT=process.env.PORT||3000



const UsedCarsRoute = require("./router/usedcars")
app.use("/usercars",UsedCarsRoute)

app.use(express.json());
app.use(cors());

app.listen(PORT, function () {
  console.log("Listening on port $",{PORT});
});
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
     sequelize.sync({ force: true}).then(()=> console.log('Models are synchronized with the database.')
     ) // Change this to "true" when You need to drop and change Tables (auto change)
  })//Keep it False if you are testing
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });