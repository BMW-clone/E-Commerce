const router = require('express').Router()
const Cart= require('../controller/cart')

router.get("/:id",Cart.getOne)
router.get("/", Cart.getAll)
router.delete("/:id", Cart.deleteById)
router.post("/",Cart.createCart)
router.post("/add-to-cart", Cart.addToCart)

module.exports=router