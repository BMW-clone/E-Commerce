const router = require('express').Router()
const client= require('../controller/client')

//!login
router.post("/login",client.getOne)
router.post("/signup",client.Add)
router.put("/update",client.Update)

module.exports=router