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