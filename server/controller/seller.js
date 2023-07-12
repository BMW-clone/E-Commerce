const cloudinary = require("../database/cloudinary");
const seller= require('../database/model/seller');


module.exports={
//! find specific seller on login 
getOne: async (req,res)=>{
  const {username}=req.body
try{
  const seller= await admin.findOne({where:{username}})
  res.status(200).json(seller)
}
catch(err){
  res.status(500).json(err)
}
}
}