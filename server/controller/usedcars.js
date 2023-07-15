const cloudinary = require("../database/cloudinary");
const {sequelize,db}= require("../database");
const usedcars = require("../database/model/usedcars");

const CarsInfo = {
  getAll: async (req, res) => {
    try {
      const cars = await db.usedcars.findAll();
      res.json(cars);
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteCar: async (req, res) => {
    const { id } = req.params;
    try {
      await db.usedcars.destroy({ where: { id } });
      res.json({ message: "car deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  postCar: async (req, res) => {
    const {
      price,
      category,
      color,
      year,
      image ,
      mileage,
      model,
      transmition,
      hp,
      carburant,
    } = req.body;
    try {
      console.log("image in backend",image);
      const ima= await cloudinary.uploader
        .upload(image,{
             folder:"image"
        });
  
      const car = await db.usedcars.create({
        price,
        category,
        color,
        year,
        image:ima.secure_url,
        mileage,
        model,
        transmition,
        hp,
        carburant,
        
      });
      res.json(car);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updateCar: async (req, res) => {
    const { id } = req.params;
    let {
      price,
      color,
      image,
    } = req.body;

    try {
      const car = await db.usedcars.findByPk(id);
      if (!car) {
        return res.status(404).json({ error: "car not found" });
      }

      
      if (image !== car.image) {
        const ima= await cloudinary.uploader
        .upload(image,{
             folder:"image"
        }); 
        car.image = ima.secure_url;
      }
        car.price=price;
        car.color=color
       console.log("image",image) 
      await car.save();
      res.json(car);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports =CarsInfo