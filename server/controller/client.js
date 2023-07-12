const sequelize = require("../database");
const cloudinary = require("../database/cloudinary");
const Client= require('../database/model/client');
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
module.exports={
    //! find specific user on login 
    getOne: async (req,res)=>{
        const {username}=req.body
        try{
            const user= await Client.findOne({where:{username}})
            res.status(200).json(user)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    //!signUp
    Add: async (req,res)=>{
        const {id,username,email,password,profile,role,phoneNumber,coverpic,createdAt,updatedAt}=req.body
        try{
            const user=await Client.create({id,username,email,password,profile,role,phoneNumber,coverpic,createdAt,updatedAt})
            res.status(201).json(user)
        }
        catch(err){
            res.status(500).json(err)
        }
       
    }
}