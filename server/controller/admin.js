const cloudinary = require("../database/cloudinary");
const {sequelize,db}= require("../database");


module.exports={
//! find specific admin on login 
getOne: async (req,res)=>{
  const {username}=req.body
try{
  const admin= await db.Admin.findOne({where:{username}})
  res.status(200).json(admin)
}
catch(err){
  res.status(500).json(err)
}
},


}


