const { db } = require("../database");
const cloudinary = require("../database/cloudinary");
const { ACCESS_TOKEN_SECRET } = require("./jwtConfig.js");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt"); 

module.exports = {
  //! Find specific user on login
  getOne: async (req, res) => {
    const { username, password } = req.body
    try {
      const user = await db.Client.findOne({ where: { username: username } })
      if (!user) {
        return res.status(404).json({ error: "User not found" })
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            {
              username: user.username,
              password: user.password,
              role: user.role,
            },
            ACCESS_TOKEN_SECRET
          )
          res.status(201).send(token)
        } else {
          res.status(401).json(err)
        }
      })
    } catch (err) {
      console.log("err", err)
      res.status(500).json(err)
    }
  },

  //! Sign up (Add) a new client
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

  //! Read all clients
  getAll: async (req, res) => {
    try {
      const clients = await db.Client.findAll()
      res.json(clients)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  //! Delete a client
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

  //! Update a client's info
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

  //! Get one user's data
  getOneUser: async (req, res) => {
    const { username } = req.body
    try {
      const user = await db.Client.findOne({ where: { username: username } })
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  },
};
