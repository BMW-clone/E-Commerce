const router = require('express').Router()
const client= require('../controller/client')

router.get("/login",client.getOne)

module.exports=router