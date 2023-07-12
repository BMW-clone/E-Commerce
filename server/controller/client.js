const cloudinary = require("../database/cloudinary");
const client= require('../database/model/client');

module.exports={
    //! find specific user on login 
    getOne: async (req,res)=>{
        const {username}=req.body
        try{
            const user= await client.findOne({where:{username}})
            res.status(200).json(user)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
}