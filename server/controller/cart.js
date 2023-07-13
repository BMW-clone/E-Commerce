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
}

