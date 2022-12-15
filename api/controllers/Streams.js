const Streams = require("../models/Stream");

const getStreamsDb = async () => {
  const results = [];

  try {
    const dbResults = await Streams.find({}).populate({
      path: "rating",
      populate: "name",
    });
    dbResults.forEach((r) => {
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
        continent: r.continent,
        rating: r.rating,
      });
    });
    return results;
  } catch (error) {
    console.log(error);
  }
};

const getAllStreamsDb = async () => {
  const results = [];

  try {
    const dbResults = await Publication.findAll({
      include: [
        {
          model: Product,
        },
        {
          model: User,
        },
      ],
    });

    dbResults.forEach(async (r) => {
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
        username: r.user.username,
      });
    });

    return results;
  } catch (error) {
    throw new Error("Error tratando de obtener todas las publicaciones!");
  }
};

const getStreamsUser = async (id) => {
  const results = [];

  try {
    const dbResults = await Publication.findAll({
      include: [
        {
          model: Product,
        },
        {
          model: User,
          where: {
            id,
          },
        },
      ],
      where: {
        isBanned: false,
      },
    });

    dbResults.forEach(async (r) => {
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
        username: r.user.username,
      });
    });

    return results;
  } catch (error) {
    throw new Error(
      `Error tratando de obtener todas las publicaciones del usuario con el id: ${id}!`
    );
  }
};

module.exports = {
  getStreamsDb,
};
