const cors=require("cors")
const express=require("express")
const app=express()
const sequelize=require("./database/index")
const PORT=process.env.PORT||3000


app.use(express.json());
app.use(cors());


sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync({ force: false}); // Change this to "true" when You need to drop and change Tables (auto change)
  })//Keep it False if you are testing
  .then(() => {
    console.log('Models are synchronized with the database.');
    app.listen(PORT, function () {
      console.log("Listening on port $",{PORT});
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });