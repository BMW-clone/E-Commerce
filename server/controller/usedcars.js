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
      await db.UsedCars.destroy({ where: { id } });
      res.json({ message: "Blog deleted successfully" });
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
      const result = await cloudinary.uploader.upload(image, {
        folder: "image",
      });
      const car = await UsedCars.create({
        price,
        category,
        color,
        year,
        image: result.secure_url,
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
        return res.status(404).json({ error: "Blog not found" });
      }
      if (image !== car.image) {
        const result = await cloudinary.uploader.upload(image, {
          folder: "image",
        });
        image = result.secure_url;
      }
      await car.save();
      res.json(car);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports =CarsInfo