const Streams = require("../models/Stream")
const Express = require ("express")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const router = Express.Router()

router.get("/streams", async(req,res)=>{
    try {
    const {name} = req.query
    const streamsDb = await Streams.find({})
    if(name){
    const filterStreams =  streamsDb.filter((stream)=>stream.name.toLowerCase().includes(name.toLowerCase()))
    console.log(filterStreams)
    res.send(filterStreams)
    
}else{
    res.send(streamsDb)
} 
} catch (error) {
    res.status(404).send("Se rompio como mi corazon")        
}
})

router.get("/streams/:id", async(req,res)=>{
    try {
        const {id} = req.params
        const streamDb = await Streams.find({})
        if(id){
        const filterStream = streamDb.filter((stream)=>stream._id == id)
        filterStream.length?
        res.send(filterStream)
        :res.send("Error al obtener Id de Stream")
    }
    } catch (error) {
        res.status(404).send("Se rompio como mi corazon")        
    }
})



router.delete("/streams/:id", async(req,res)=>{
    try {
    const {id} = req.params
    if(!id){
        res.send("Ingrese un Stream correcto")
    }else{
        Streams.deleteOne({_id:(id)})
        res.send("Stream eliminado con exito")
    }
  } catch (error) {
        res.status(404).send("Se rompio como mi corazon")
    }
})




module.exports = router