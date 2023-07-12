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
     sequelize.sync({ force: true}).then((res) => { console.log(res);
      console.log('Models are synchronized with the database.');
  })
  
  
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

    app.listen(PORT, function () {
      console.log("Listening on port $",{PORT});
    });