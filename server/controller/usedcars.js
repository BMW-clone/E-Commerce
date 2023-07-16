const cloudinary = require("../database/cloudinary");
const {sequelize,db}= require("../database");
const { Op } = require('sequelize');


const CarsInfo = {
  getAll: async (req, res) => {
    try {
      const cars = await db.usedcars.findAll();
      res.json(cars);
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  //! get one seller used cars
  getAllSeller: async (req, res) => {
    const SellerId=req.params.idSeller
    try {
      const cars = await db.usedcars.findByPk({where:{SellerId}});
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
      image,
      mileage,
      model,
      transmition,
      hp,
      carburant,
    } = req.body; 
    try {
      const ima= await cloudinary.uploader.upload(image,{folder:"image"},(err,result)=>{
        if(err)console.log("err",err);
        else console.log("result",result);
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
  filterCarsByCategory: async (req, res) => {
    const { category } = req.body;
  
    try {
      const filteredCars = await db.usedcars.findAll({
        where: {
          category: category
        }
      });
      res.json(filteredCars);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  filterCarsByTransmition: async (req, res) => {
    const { transmition } = req.body;
  
    try {
      const filteredCars = await db.usedcars.findAll({
        where: {
          transmition: transmition
        }
      });
      res.json(filteredCars);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  filterCarsByPrice: async (req, res) => {
    const { price } = req.body;
  
    let whereClause = {};
  
    if (price === "lessThan50000") {
      whereClause.price = {
        [Op.lt]: 50000
      };
    } else if (price === "greaterThan50000") {
      whereClause.price = {
        [Op.gte]: 50000
      };
    }
  
    try {
      const filteredCars = await db.usedcars.findAll({
        where: whereClause
      });
      res.json(filteredCars);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  
};

module.exports =CarsInfo