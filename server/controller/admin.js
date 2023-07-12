const cloudinary = require("../database/cloudinary");
const admin= require('../database/model/admin');


module.exports={
//! find specific admin on login 
getOne: async (req,res)=>{
  const {username}=req.body
try{
  const admin= await admin.findOne({where:{username}})
  res.status(200).json(admin)
}
catch(err){
  res.status(500).json(err)
}
},


}


