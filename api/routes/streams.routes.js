const {Streams} = require("../models/Stream")
const Express = require ("express")
const router = Express.Router()

router.get("/streams", async(req,res)=>{
    const name = req.query.name
    try {       
    const stream= await Streams.find({})
    if(name){
    const filterStream = streamDb.filter((stream)=>stream._id == id)
    filterStream.length?
    res.send(filterStream)
    :res.send(stream)
    }
    } catch (error) {
    res.status(404).send("Error al traer los streams")    
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
    const data= req.body
    try {
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

router.get('/filter', async (req, res) => {
    const { category, lenguaje, origin, opt } = req.query
  
    console.log(opt)
  
    try {
      let streams = await getStreamsDb()
  
      if (category) {
        stream = streams.filter(streams => streams.type === type)
      }
  
      if (lenguaje) {
        streams = streams.filter(streams => streams.varietal === varietal)
      }
  
      if (origin) {
        streams = streams.filter(streams => streams.origin === origin)
      }
  
      if (!streams.length) return res.status(200).json('No hay publicaciones con los filtros seleccionados!')
  
      if (opt === 'az') {
        streams = streams.sort((a, b) => {
          if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
          if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
          return 0
        })
      } else if (opt === 'za') {
        streams = streams.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) return 1
          if (a.title.toLowerCase() > b.title.toLowerCase()) return -1
          return 0
        })
      } else if (opt === 'more') {
        streams = streams.sort((a, b) => {
          if (a.price < b.price) return 1
          if (a.price > b.price) return -1
          return 0
        })
      } else if (opt === 'less') {
        streams = streams.sort((a, b) => {
          if (a.price > b.price) return 1
          if (a.price < b.price) return -1
          return 0
        })
      }
  
      res.status(200).json(streams)
    } catch (error) {
      res.status(400).json(error.message)
    }
  })
  router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
      const pb = await getOnePublication(id)
  
      if (!pb) {
        return res
          .status(404)
          .json(`Publicacion con el ID: ${id} no encontrada!`)
      }
  
      res.status(200).json(pb)
    } catch (error) {
      res.status(404).json(error.message)
    }
  })
  
  router.get('/order/:opt', async (req, res) => {
    try {
      const { opt } = req.params
  
      let results = []
  
      if (opt === 'more') {
        results = await orderPublicationsMorePrice()
      } else if (opt === 'less') {
        results = await orderPublicationsLessPrice()
      } else if (opt === 'az') {
        results = await orderPublicationsAtoZ()
      } else if (opt === 'za') {
        results = await orderPublicationsZtoA()
      } else {
        return res.status(404).json('No existe ningun filtro con esas opciones!')
      }
  
      res.status(200).json(results)
    } catch (error) {
      res.status(400).json(error.message)
    }
  })


module.exports = router