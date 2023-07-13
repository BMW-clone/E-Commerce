const {sequelize,db}= require("../database");
const cloudinary = require("../database/cloudinary");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
module.exports={
    //! find specific user on login 
    getOne: async (req,res)=>{
        const {username}=req.body
        console.log("username",username);
        
        try{
            const user= await db.Client.findOne({where:{username:username}})
            console.log("user",user);
            if(user){
                res.status(200).json(user)
            }else{
                res.status(404).json("user not found")
            }
           
        }
        catch(err){
            console.log("err",err);
            res.status(500).send(err)
        }
    },
    //!signUp
    Add: async (req,res)=>{
        const {username,email,password,profilepic,role,phoneNumber,coverpic}=req.body
        try{
         
            const user=await db.Client.create({username,email,password,profilepic,role,phoneNumber,coverpic})
            res.status(201).json(user)
        }
        catch(err){
            console.log(err);
            res.status(500).send(err)
        }
       
    }
}
//!cloudinary uploader
// const result = await cloudinary.uploader.upload(profilepic, {
//     folder: "image",
//   });