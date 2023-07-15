const router = require('express').Router()
const client= require('../controller/client')

//!login
router.post("/login",client.getOne)
//!! signup
router.post("/signup",client.Add)
<<<<<<< HEAD
// get all client 
router.get('/',client.getAll)
//delete client
router.delete('/delete/:id',client.deleteClient)

=======
//! update
router.put("/update",client.Update)
//!get one user data
router.post("/findOne",client.getOneUser)
>>>>>>> be96a2743d5b75afe0a95545845dfe67918904d4

module.exports=router