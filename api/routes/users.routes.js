const Users = require("../models/Users");
const { Roles } = require("../models/Roles");
const Express = require("express");
const router = Express.Router();
const userController = require('../controllers/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

router.put("/user/email/verify/:uniqueKey", async(req, res)=>{
  const {uniqueKey} = req.params
  console.log(uniqueKey)

  const user = await Users.findOne({uniqueKey: uniqueKey})
  if(!user){
    res.status(406).json("El codigo de validacion es incorrecto, presiona continuar e intenta registrarte nuevamente.")
  }
  else{
  if(user.isValid === true){
    res.status(400).json("El usuario ya se encuentra validado, presiona continuar e intenta iniciar sesión.")
  }
  else if(user.isValid === false){
    user.isValid = true
    const userV = await user.save()
    console.log(userV)
    res.status(200).json("Validado")
  }
}
})

// router.get("/user/:id", async(req,res)=>{
//     try {
//         const {id} = req.params
//         const usersDb = await Users.find({})
//         console.log(usersDb)
//         if(id){
//         const filterUser = usersDb.filter((users)=>users._id == id)
//         filterUser.length?
//         res.status(200).send(filterUser)
//         :res.status(400).send("Error al obtener Id de User")
//     }
//     } catch (error) {
//         console.log(error)
//         res.status(404).send(error)        
//     }
//   })

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
    const usersDb = await Users.find({})
    const findEmail = await Users.findOne({email: email})

    if (findEmail) {
      return res.status(404).json(true)
    }

    res.status(200).json(false)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.get('/user/username/:username', async (req, res) => {
  const { username } = req.params
  const name = username
  
  try {
    const findUsername =  await Users.findOne({ name: name })
    if (findUsername) {
      return res.status(404).json(true)
    }

    res.status(200).json(false)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.put("/userUpDate/:id", async (req,res)=>{
  try {
  const {id} = req.params
  const {username,email,password} = req.body
  const salt = 10;
  const hash = await bcrypt.hash(password, salt);
  const user = await Users.findByIdAndUpdate({_id:id},{ email:email, name:username, password:hash})
    res.status(200).send(userModific)
} catch (error) {
    res.status(404).send("No de puso modificar")
}
})

router.put("/userAdminUser/:id", async (req,res)=>{
  try {
    const {id} = req.params
    const findUser = await Users.findById({_id:id}).populate("roles")
    const findRolesUser = await Roles.findOne({name:"User"})
    const findRolesAdmin = await Roles.findOne({name:"Admin"})
    if(findUser.roles[0].name === "Admin"){
    findUser.roles[0] = findRolesUser
    const saveRoleUser = findUser.save()
    res.status(200).send("Se cambio a User")
    }else{
      findUser.roles[0] = findRolesAdmin
      const saveRoleAdmin = findUser.save()
      res.status(200).send("Se cambio a Admin")
    }
    
  } catch (error) {
    res.send("se rompio")
  }
})

const {
  getUsers,
  getUserById,
  deleteUser,
  setBanned,

} = require("../controllers/users.controller");
const { verifyToken, isAdmin } = require("../middlewares/index");


router.get("/users", getUsers);

router.get("/user/:id", getUserById);

router.delete("/user/:id", verifyToken, isAdmin, deleteUser);

router.put("/user/:id", setBanned);





module.exports = router;
