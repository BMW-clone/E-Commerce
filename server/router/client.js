const router = require('express').Router()
const client= require('../controller/client')

//!login
router.post("/login",client.getOne)
router.post("/signup",client.Add)
// get all client 
router.get('/',client.getAll)
//delete client
router.delete('/delete/:id',client.deleteClient)


module.exports=router