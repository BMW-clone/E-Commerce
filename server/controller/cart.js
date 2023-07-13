const cloudinary = require("../database/cloudinary");
const { db, sequelize } = require("../database");
// const NewCars = require("../database/model/Newcars");
// const usedcars = require("../database/model/usedcars");

module.exports = {
  async getOne(req, res) {
    try {
      const { id } = req.params
      const cart = await db.Cart.findByPk(id, {
        include: [db.NewCars, db.UsedCars],
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

  async getAll(req, res) {
    try {
      const carts = await db.Cart.findAll({
        include: [db.NewCars, db.UsedCars],
      })
      res.json(carts)
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  },

  async deleteById(req, res) {
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

  async createCart(req, res) {
    try {
      const { idClient } = req.body
      //! Find the client by ID
      const client = await db.Client.findByPk(idClient)
      if (!client) {
        return res.status(404).json('not found')
      }
      //! Create the cart associated with the client
      const cart = await db.Cart.create({ idClient })
      res.status(201).json(cart)
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  },
  async addToCart(req, res) {
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
        car = await db.UsedCars.findByPk(idCars)
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
