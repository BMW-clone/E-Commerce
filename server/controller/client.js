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
        const {username,email,password,profilepic,role,phoneNumber,coverpic}=req.body
        const hashedpassword = await bcrypt.hash(password,10)
        console.log("hashedpassword",hashedpassword);
        try{
            
            const user=await db.Client.create({username,email,password:hashedpassword,profilepic,role,phoneNumber,coverpic})
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
