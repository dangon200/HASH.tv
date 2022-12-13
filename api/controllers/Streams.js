const Stream = require("../models/Stream")
const Streams = require("../models/Stream")
const Users = require("../models/Users")
const getStreamsDb = async () => {
  const results = []

  try {
    const dbResults = await Streams.find({})
    dbResults.forEach(r => {
      results.push({
        _id: r._id,
        user: r.user,
        title: r.title,
        image: r.image,
        language: r.language,
        suscriptores: r.suscriptores,
        description: r.description,
        name: r.name,
        category: r.category,
        continent: r.continent
      })
    })
    return results
  } catch (error) {
    console.log(error)
  }
}

const getAllStreamsDb = async () => {
  const results = []

  try {
    const dbResults = await Publication.findAll({
      include: [{
        model: Product
      }, {
        model: User
      }]
    })

    dbResults.forEach(async r => {
      results.push({
        id: r.id,
        title: r.title,
        price: r.price,
        count: r.count,
        image: r.image,
        description: r.description,
        isBanned: r.isBanned,
        name: r.product.name,
        type: r.product.type,
        varietal: r.product.varietal,
        cellar: r.product.cellar,
        img: r.product.img,
        origin: r.product.origin,
        userId: r.userId,
        email: r.user.email,
        username: r.user.username
      })
    })

    return results
  } catch (error) {
    throw new Error('Error tratando de obtener todas las publicaciones!')
  }
}

const getStreamsUser = async (id) => {
  const results = []

  try {
    const dbResults = await Publication.findAll({
      include: [{
        model: Product
      }, {
        model: User,
        where: {
          id
        }
      }],
      where: {
        isBanned: false
      }
    })

    dbResults.forEach(async r => {
      results.push({
        id: r.id,
        title: r.title,
        price: r.price,
        count: r.count,
        image: r.image,
        description: r.description,
        name: r.product.name,
        type: r.product.type,
        varietal: r.product.varietal,
        cellar: r.product.cellar,
        img: r.product.img,
        origin: r.product.origin,
        userId: r.userId,
        email: r.user.email,
        username: r.user.username
      })
    })

    return results
  } catch (error) {
    throw new Error(`Error tratando de obtener todas las publicaciones del usuario con el id: ${id}!`)
  }
}

const addFavorites = async (req, res = response)=>{
  const {id} = req.params
  const userId = req.userId
  const userDB = await Users.findById(id)
  if(!userDB){
    return res.json({msg:"No se encontro el usuario"})
  }
  const user = await Users.findById(userId)
  user.favorites.push(id)
  user.save()
  res.json({msg: "Listo"})
  
  /* const {id} = req.params
  const userId = req.userId
  const stream = await Streams.findById(id)
  if(!stream){
    return res.json({msg:"No se encontro un stream"})
  }
  const user = await Users.findById(userId)
  user.favorites.push(id)
  user.save()
  res.json({msg: "Listo"}) */
}

const getFavorites = async (req, res = response)=>{
  const user = await Users.findById(req.userId);
    let number = user.favorites.length;
    let favorites = [];

    do {
        const userId = user.favorites[number-1]
        const userFav = await Users.findById(userId);
        const streams = userFav.myStreams
        const lastStreamId = userFav.myStreams[streams.length - 1].toString().split('"')[0]
        const lastStream = await Stream.findById(lastStreamId)
        const newStreamFav = {
            id: lastStream.id,
            name: userFav.name,
            title: lastStream.title,
            description: lastStream.description,
            language: lastStream.language
        }
        favorites.push(newStreamFav)
        number--
        console.log(favorites)
    }while(number > 0)

    res.json(favorites)
}

const deleteFavorites = async (req, res = response)=>{
  /* const {id, userid} = req.params */
  const {id} = req.params
  const user = await Users.findById(req.userId)
  const favorites = user.favorites
  favorites.forEach((f)=>{
    if(f === id){
    const index = favorites.indexOf(id)
    favorites.splice(index, 1)
    user.save()
      }
  })
  
res.json({msg:"This user is not longer in your favorites",user})
}

module.exports = {
  getStreamsDb,
  addFavorites,
  getFavorites,
  deleteFavorites,
}
