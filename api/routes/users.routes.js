  const Users = require("../models/Users");
const Express = require("express");
const router = Express.Router();
const userController = require('../controllers/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

router.get("/user/:id", async(req,res)=>{
    try {
        const {id} = req.params
        const usersDb = await Users.find({})
        if(id){
        const filterUser = usersDb.filter((users)=>users._id == id)
        filterUser.length?
        res.status(200).send(filterUser)
        :res.status(400).send("Error al obtener Id de User")
    }
    } catch (error) {
        console.log(error)
        res.status(404).send(error)        
    }
  })

router.get("/user", async (req, res) => {
  try {
    const { name } = req.query;
    const usersDb = await Users.find({});
    if (name) {
      const filterUser = usersDb.filter((users) =>
        users.name.toLowerCase().includes(name.toLowerCase())
      );
      res.send(filterUser);
    } else {
      res.send(usersDb);
    }
  } catch (error) {
    res.status(404).send({error: error.message});
  }
});

router.get('/user/email/:email', async (req, res) => {
  const { email } = req.params
  try {
    const findEmail = await Users.findOne({ email: email })

    if (findEmail) {
      console.log(findEmail)
      return res.status(404).json(true)
    }

    res.status(200).json(false)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.get('/user/username/:username', async (req, res) => {
  const { username } = req.params
  try {
    const findUsername =  await Users.findOne({ name: username })
    if (findUsername) {
      return res.status(404).json('El username ya existe. Pruebe con otro!')
    }

    res.status(200).json('El username esta disponible!')
  } catch (error) {
    res.status(400).json(error.message)
  }
})

const {
  getUsers,
  getUserById,
  deleteUser,
} = require("../controllers/users.controller");
const { verifyToken, isAdmin } = require("../middlewares/index");


router.get("/users", getUsers);

router.get("/user/:id", getUserById);

router.delete("/user/:id", verifyToken, isAdmin, deleteUser);



module.exports = router;
