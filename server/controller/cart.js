const cloudinary = require("../database/cloudinary");
const Cart = require('../database/model/cart');

module.exports = {
  async getOne(req, res) {
    try {
      const { id } = req.params
      const cart = await Cart.findByPk(id)
      if (!cart) {
        return res.status(404).json('not found')
      }
      res.json(cart)
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  },

  deleteById: async (req, res) => {
    try {
      const { id } = req.params
      const cart = await Cart.findByPk(id)
      if (!cart) {
        return res.status(404).json('not found')
      }
      await cart.destroy()
      res.json('Cart deleted successfully')
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  },

  createCart: async (req, res) => {
    try {
      const { id } = req.body
      const client = await client.findByPk(id)
      if (!client) {
        return res.status(404).json('not found')
      }
      const cart = await cart.create({ id })
      res.status(201).json(cart)
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  },
  addToCart: async (req, res) => {
    try {
      const { id, newcarsId } = req.body
      const client = await client.findByPk(id)
      if (!client) {
        return res.status(404).json( 'client not found' )
      }
      const cart = await cart.findOne({ where: { id } })
      if (!cart) {
        return res.status(404).json('cart not found')
      }
      cart.newcars.push(newcarsId)
      await cart.save()
      res.json(cart)
    } catch (error) {
      console.error( error)
      res.status(500).json(error)
    }
  }
};



