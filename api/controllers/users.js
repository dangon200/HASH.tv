const Users = require("../models/Users");
// const { Op } = require('sequelize')

const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcryptjs')

const getUserById = async (id) => {
  try {
    const dbResult = await Users.findByPk(_id)
    if (!dbResult) return null
    const result = {
      id: dbResult._id,
      name: dbResult.name,
      email: dbResult.email,
      // region: dbResult.region,
      // image: dbResult.image,
    }
    return result
  } catch (error) {
    throw new Error('Error tratando de encontrar un usuario por su ID!')
  }
}

const getAllUsers = async () => {
  const results = []

  try {
    const dbResults = await Users.findAll({})

    dbResults.forEach((r) => {
      results.push({
        id: r._id,
        username: r.username,
        email: r.email,
        // region: r.region,
        // image: r.image,
        
      })
    })
    return results
  } catch (error) {
    throw new Error('Error tratando de obtener los usuarios de la DB!')
  }
}

const getAllUsersBanned = async () => {
  const results = []

  try {
    const dbResults = await Users.findAll({
      where: {
        isBanned: true
      }
    })

    dbResults.forEach((r) => {
      results.push({
        id: r._id,
        username: r.username,
        email: r.email,
        // region: r.region,
        // image: r.image,
      })
    })
    return results
  } catch (error) {
    throw new Error('Error tratando de obtener los usuarios de la DB!')
  }
}

const getAllUsersNotBanned = async () => {
  const results = []

  try {
    const dbResults = await Users.findAll({
      where: {
        isBanned: false
      }
    })

    dbResults.forEach((r) => {
      results.push({
        id: r._id,
        username: r.username,
        email: r.email,
        // region: r.region,
        // image: r.image,
      })
    })
    return results
  } catch (error) {
    throw new Error('Error tratando de obtener los usuarios de la DB!')
  }
}

const createUser = async (username, email, password) => {
  try {
    const userCreated = new Users({
      name : username,
      email : email,
      password: await bcrypt.hash(password, 10),
    })

    return userCreated
  } catch (error) {
    throw new Error('Error tratando de crear un nuevo usuario!')
  }
}

const setBanned = async (id, banned) => {
  try {
    const userUpdated = await Users.update(
      {
        isBanned: banned
      },
      {
        where: {
          id
        }
      }
    )

    if (userUpdated) {
      const userById = await getUserById(id)
      return userById
    }
  } catch (error) {
    throw new Error('Error actualizando usuario!')
  }
}

const setImage = async (id, url) => {
  try {
    const userUpdated = await User.update(
      {
        image: url
      },
      {
        where: {
          id
        }
      }
    )

    if (userUpdated) {
      const userById = await getUserById(id)
      return userById
    }
  } catch (error) {
    throw new Error('Error actualizando usuario!')
  }
}

const setVerified = async (id, verified) => {
  try {
    const userUpdated = await User.update(
      {
        isVerified: verified
      },
      {
        where: {
          id
        }
      }
    )

    if (userUpdated) {
      const userById = await getUserById(id)
      return userById
    }
  } catch (error) {
    throw new Error('Error actualizando usuario!')
  }
}

const deleteUserById = async (id) => {
  try {
    const userDeleted = await User.destroy({
      where: {
        id
      }
    })
    return userDeleted
  } catch (error) {
    throw new Error('Error al eliminar el usuario!')
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getAllUsersBanned,
  getAllUsersNotBanned,
  getUserById,
  setBanned,
  setImage,
  setVerified,
  deleteUserById
}
