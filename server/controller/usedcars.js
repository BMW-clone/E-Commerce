const cloudinary = require("../database/cloudinary");
const {sequelize,db}= require("../database");

const CarsInfo = {
  getAll: async (req, res) => {
    try {
      const cars = await db.UsedCars.findAll();
      res.json(cars);
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteCar: async (req, res) => {
    const { id } = req.params;
    try {
      await Blog.destroy({ where: { id } });
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
      mileage,
      model,
      transmition,
      hp,
      carburant,
      rate,
      status,
    } = req.body;
    try {
  
      const car = await UsedCars.create({
        price,
        category,
        color,
        year,
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
      const car = await db.UsedCars.findByPk(id);
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