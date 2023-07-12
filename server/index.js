const cors=require("cors")
const express=require("express")
const app=express()
const db=require("./database/index")
const PORT=process.env.PORT||3000



const UsedCarsRoute = require("./router/usedcars")
app.use("/usercars",UsedCarsRoute)


app.use(express.json());
app.use(cors());

app.listen(PORT, function () {
  console.log("Listening on port $",{PORT});
});

    
   db.sync({ force: true}).then(() => {
    console.log('Models are synchronized with the database.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

