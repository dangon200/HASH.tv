const Users = require("../models/Users")
const Express = require ("express")
const router = Express.Router()

router.get("/user", async(req,res)=>{
    try {
    const {name} = req.query
    const usersDb = await Users.find({})
    if(name){
    const filterUser = usersDb.filter((users)=>users.name.toLowerCase().includes(name.toLowerCase()))
    res.send(filterUser)
}else{
    res.send(usersDb)
} 
} catch (error) {
    res.status(404).send("Se rompio como mi corazon")        
}
})

router.get("/user/:id", async(req,res)=>{
    try {
        const {id} = req.params
        const usersDb = await Users.find({})
        if(id){
        const filterUser = usersDb.filter((users)=>users._id == id)
        filterUser.length?
        res.send(filterUser)
        :res.send("Error al obtener Id de User")
    }
    } catch (error) {
        res.status(404).send("Se rompio como mi corazon")        
    }
})

router.delete("/user/:id", async(req,res)=>{
    try {
    const {id} = req.params
    if(!id){
        res.send("Ingrese un User correcto")
    }else{
        Users.remove({_id: (id)})
        res.send("User elminado con exito")
    }
  } catch (error) {
        res.status(404).send("Se rompio como mi corazon")
    }
})

module.exports = router