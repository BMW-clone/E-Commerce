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
},

Update : async(req,res)=>{
  const { id } = req.params;
  const {
    firstname,
    username,
    email,
    password,
    profilepic,
    role,
    phoneNumber
  } = req.body;
  
  try{
    let updatedData = {
      firstname,
      username,
      email,
      password,
      profilepic,
      role,
      phoneNumber
    };
    const sellerProfile= await seller.findOne({
      where : {id}
    })
    if (!userProfile) {
      return res.status(404).json({ error: "User profile not found" });
    }

    
  }
  catch(error){
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
  
}
}