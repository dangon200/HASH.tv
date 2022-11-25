const {Streams} = require("../models/Stream")
const Express = require ("express")
const router = Express.Router()

router.get("/streams", async(req,res)=>{
    const { name } = req.query
    const stream = await Streams.find({})
    try {       
        if(name) {
            const streamFilter = stream.filter((str) => str.name.toLowerCase().includes(name.toLowerCase()));

            streamFilter.length
            ? res.send(streamFilter)
            : res.status(404).send("No se encontraron streamers con ese nombre");

        } else {
            res.send(stream)
        }
    } catch (error) {
        res.status(404).send("Exito al traer los streams")    
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

router.post("/streams", async(req,res)=>{
    try {
    const data= req.body
        const stream = await Streams.create(data)
        res.send(stream)
    } catch (error) {
        res.send("Error en Stream")
    }
})

router.delete("/streams/:id", async(req,res)=>{
    try {
    const {id} = req.params
    if(!id){
        res.send("Ingrese un Stream correcto")
    }else{
        Streams.remove({_id:(id)})
        res.send("Stream eliminado con exito")
    }
  } catch (error) {
        res.status(404).send("Se rompio como mi corazon")
    }
})




module.exports = router