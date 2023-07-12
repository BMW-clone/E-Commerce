const router = require('express').Router()
const admin= require('../controller/admin')

//! login
router.get("/getOne",admin.getOne)

module.exports=router