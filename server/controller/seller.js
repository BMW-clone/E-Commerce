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


Update : async(req,res)=>{
  const { id } = req.params;
  const {
    username,
    email,
    password,
    profilepic,
    role,
    phoneNumber,
    coverpic
  } = req.body;
  
  try{
    let updatedData = {
      username,
      email,
      password,
      profilepic,
      role,
      phoneNumber,
      coverpic
    };
    const sellerProfile= await seller.findOne({
      where : {id}
    })
    if (!sellerProfile) {
      return res.status(404).json({ error: "User profile not found" });
    }

    
  }
  catch(error){
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
  

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

}