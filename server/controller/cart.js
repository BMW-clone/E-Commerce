const cloudinary = require("../database/cloudinary");
const { db, sequelize } = require("../database");

module.exports = {
 getOne: async (req, res) =>{
    try {
      const { id } = req.params
      const cart = await db.Cart.findByPk(id, {
        include: [db.NewCars, db.usedcars],
      })
      if (!cart) {
        return res.status(404).json('cart not found')
      }
      res.json(cart)
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  },

  getAll:  async(req, res)=> {
    try {
      const carts = await db.Cart.findAll({
        include: [db.NewCars, db.usedcars],
      })
      res.json(carts)
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  },

  deleteById:async (req, res)=> {
    try {
      const { id } = req.params
      const cart = await db.Cart.findByPk(id)
      if (!cart) {
        return res.status(404).json('Cart not found')
      }
      await cart.destroy()
      res.json('Cart deleted successfully')
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  },
 
 createCart : async (req, res) => {
    try {
      const { idClient } = req.body
      const client = await client.findByPk(idClient)
      if (!client) {
        return res.status(404).json('Client not found')
      }
      const cart = await cart.create({ price: 0, title: 'default', image: 'image.jpg', idClient })
      return res.status(201).json(cart)
    } catch (error) {
      console.error(error)
      // res.status(500).json(error)
    }
  },
   addToCart:async(req, res)=> {
    try {
      const { idClient, idCars, carType } = req.body
      //! Find client by ID
      const client = await db.Client.findByPk(idClient)
      if (!client) {
        return res.status(404).json('Client not found')
      }
      //! Find the cart associated with the client
      const cart = await db.Cart.findOne({ where: { idClient } })
      if (!cart) {
        return res.status(404).json('Cart not found')
      }
      //! Find the car based on carType (NewCars or usedCars)
      let car
      if (carType === 'newcars') {
        car = await db.NewCars.findByPk(idCars)
      } else if (carType === 'usedcars') {
        car = await db.usedcars.findByPk(idCars)
      }
      if (!car) {
        return res.status(404).json('Car not found')
      }
      //! Add the car to the cart
      if (carType === 'newcars') {
        await cart.addCar(car)
      } else if (carType === 'usedcars') {
        await cart.postCar(car)
      }
      res.json(cart)
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }
};
