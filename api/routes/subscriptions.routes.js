const Subscriptions = require("../models/Subscription");
const Express = require("express");
const router = Express.Router();

router.get("/subscriptions/:id", async(req,res)=>{
    try {
        const {id} = req.params
        const userSub = await Subscriptions.find({})
        if(id){
        const filterUser = userSub.filter((e)=>e.user === id)
        filterUser.length?
        res.status(200).send(filterUser)
        :res.status(400).send("Error al obtener Id de User")
    }
    } catch (error) {
        console.log(error)
        res.status(404).send(error)        
    }
  })

  module.exports = router;