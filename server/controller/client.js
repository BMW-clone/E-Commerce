<<<<<<< HEAD
const { db } = require("../database");


module.exports = {
    
  //! signUp
  Add: async (req, res) => {
    const { username, email, password, profilepic, role, phoneNumber, coverpic } = req.body;

    try {
      const user = await db.Client.create({ username, email, password, profilepic, role, phoneNumber, coverpic });
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  //! find client when logged in by username
  getOne: async (req, res) => {
    const { username } = req.body

    try {
      const client = await db.Client.findOne({ where: { username: username } })

      if (client) {
        res.status(200).json(client)
      } else {
        res.status(404).json("client not found")
      }
    } catch (err) {
      console.log("err", err)
      res.status(500).send(err)
    }
  },
//! update client info 
    Update: async (req, res) => {
    const { idUser, updated } = req.body
    try {
      const user = await db.Client.findByPk(idUser)
      if (user) {
        await user.update(updated)
        const updatedUser = await db.Client.findByPk(idUser)
        res.status(200).json(updatedUser)
      } else {
        res.status(404).json("User not found")
      }
    } catch (err) {
      console.log("err", err)
      res.status(500).send(err)
    }
  },
}  
=======
const {sequelize,db}= require("../database");
const cloudinary = require("../database/cloudinary");
const {ACCESS_TOKEN_SECRET}=require("./jwtConfig")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
module.exports={
    //! find specific user on login 
    getOne: async (req,res)=>{
        const {username,password}=req.body
        try{
            const user= await db.Client.findOne({where:{username:username}})
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
        const hashedpassword = await bcrypt.hash(password,10)
        console.log("hashedpassword",hashedpassword);
        try{
            
            const user=await db.Client.create({firstname, lastname,username,email,password:hashedpassword,profilepic,role,phoneNumber,coverpic})
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
>>>>>>> da0172a8a87d83e017f479a7147e0e62bed4f9f3
