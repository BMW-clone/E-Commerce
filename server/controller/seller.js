const cloudinary = require("../database/cloudinary");
const {sequelize,db}= require("../database");

module.exports={
//! find specific seller on login 
//! find specific admin on login 
getOne: async (req,res)=>{
  const {username,password}=req.body
  try{
      const user= await db.Seller.findOne({where:{username:username}})
      if(!user){
          res.status(404).json("user not found")
         
      }else{
         bcrypt.compare(password,user.dataValues.password,(err,result)=>{
          if(result){
              const token = jwt.sign({
                  username:user.dataValues.username,
                  password:user.dataValues.password,
                  role:user.dataValues.role
              },ACCESS_TOKEN_SECRET)
              res.status(201).send(token)
          }else{
              res.send("Wrong password")                
          }
         })
      }
  }
  catch(err){
      console.log("err",err);
      res.status(500).send(err)
  }
},
  //!signUp
  Add: async (req,res)=>{
    const {firstname, lastname,username,email,password,profilepic,role,phoneNumber,coverpic}=req.body
    try{
        const user=await db.Seller.create({firstname, lastname,username,email,password,profilepic,role,phoneNumber,coverpic})
        res.status(201).json(user)
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }
   
}
}


