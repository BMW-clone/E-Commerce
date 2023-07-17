const { db } = require("../database");
const cloudinary = require("../database/cloudinary");
const {ACCESS_TOKEN_SECRET}=require("./jwtConfig.js")
const jwt=require("jsonwebtoken");
const bcrypt = require("bcrypt");


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
                        role:user.dataValues.role,
                        profilepic:user.dataValues.profilepic
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
      //!get one user data
      getOneUser: async (req,res)=>{
        const {username}=req.body
        try{
            const user= await db.Client.findOne({where:{username:username}})
            res.status(200).json(user)
          }
          catch(err){
            res.status(500).json(err)
          }
      },
    
    
    //!signUp
    Add: async (req, res) => {
      const { firstname, lastname, username, email, password, profilepic, role, phoneNumber, coverpic } = req.body
      const hashedPassword = await bcrypt.hash(password, 10)
      try {
        const user = await db.Client.create({
          firstname,
          lastname,
          username,
          email,
          password: hashedPassword,
          profilepic,
          role,
          phoneNumber,
          coverpic,
        })
        res.status(201).json(user)
      } catch (err) {
        console.log(err)
        res.status(500).json(err)
      }
    },
// read all client 
getAll: async (req, res) => {
  try {
    const clients = await db.Client.findAll()
    res.json(clients)
  } catch (err) {
    res.status(500).json(err)
  }
},

// delete client
deleteClient: async (req, res) => {
  const { id } = req.params
  try {
    await db.Client.destroy({ where: { id } })
    res.status(201).json("deleted")
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
},
    //! update client info 
    update: async (req, res) => {
      const { idUser, firstname, lastname, email, profilepic, phonenumber, coverpic } = req.body
      try {
        const user = await db.Client.findByPk(idUser)
        if (!user) {
          return res.status(404).json(err)
        }
        await user.update({
          firstname,
          lastname,
          email,
          profilepic,
          phonenumber,
          coverpic,
        })
  
        res.status(200).json(user)
      } catch (err) {
        console.log("err", err)
        res.status(500).json(err)
      }
    },
  };

