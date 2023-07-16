const {sequelize,db}= require("../database");
const cloudinary = require("../database/cloudinary");
const {ACCESS_TOKEN_SECRET}=require("./jwtConfig")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


module.exports={
//! find specific admin on login 
getOne: async (req,res)=>{
  const {username,password}=req.body
  try{
      const user= await db.Admin.findOne({where:{username:username}})
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
//!add admin using THUNDER just so it can hash the password (DON'T USE THIS IN FRONT-END !!)
Add: async (req,res)=>{
    const {firstname, lastname,username,email,password,role}=req.body
    const hashedpassword = await bcrypt.hash(password,10)
    console.log("hashedpassword",hashedpassword);
    try{
        
        const user=await db.Admin.create({firstname, lastname,username,email,password:hashedpassword,role})
        res.status(201).json(user)
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }
   
},
getOneUser: async (req,res)=>{
    const {username}=req.body
    try{
        const user= await db.Admin.findOne({where:{username:username}})
        res.status(200).json(user)
      }
      catch(err){
        res.status(500).json(err)
      }
  }
}




