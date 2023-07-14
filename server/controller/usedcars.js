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
      brand,
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
      rate,
      status,
    } = req.body;
    try {
      const ima= await cloudinary.uploader
        .upload(image,{
             imsource:"image"
        });
  
      const car = await db.usedcars.create({
        brand,
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
        rate,
        status,
        
      });
      res.json(car);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updateCar: async (req, res) => {
    const { id } = req.params;
    const {
      price,
      category,
      color,
      year,
      image,
      mileage,
      model,
      transmition,
      hp,
      carburant,
      rate,
      status,
    } = req.body;

    try {
      const car = await db.usedcars.findByPk(id);
      if (!car) {
        return res.status(404).json({ error: "car not found" });
      }

      if (image !== car.image) {
        const result = await cloudinary.uploader.upload(image, {
          folder: "image",
        }); 
        image = result.secure_url;
      }
        car.price=price;
        car.category=category;
        car.color=color;
        car.year=year;
        car.mileage=mileage;
        car.model=model;
        car.transmition=transmition;
        car.hp=hp;
        car.carburant=carburant;
        car.rate=rate;
        car.status=status
        
      await car.save();
      res.json(car);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports =CarsInfo