const cloudinary = require("../database/cloudinary");
const {sequelize,db}= require("../database");

module.exports={
//! find specific seller on login 
getOne: async (req,res)=>{
  const {username}=req.body
try{
  const seller= await db.Seller.findOne({where:{username}})
  res.status(200).json(seller)
}
catch(err){
  res.status(500).json(err)
}
},
  //!signUp
  Add: async (req,res)=>{
    const {username,email,password,profilepic,role,phoneNumber,coverpic}=req.body
    try{
        const user=await db.Seller.create({username,email,password,profilepic,role,phoneNumber,coverpic})
        res.status(201).json(user)
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }
   
}
}

