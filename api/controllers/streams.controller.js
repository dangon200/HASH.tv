const Streams = require("../models/Stream");

const getStreams = async (req, res) => {
  try {
    const { name } = req.query;
    const streamsDb = await Streams.find({});
    if (name) {
      const filterStreams = streamsDb.filter((stream) =>
        stream.name.toLowerCase().includes(name.toLowerCase())
      );
      filterStreams.length
        ? res.send(filterStreams)
        : res.status(404).send("No se escontro ese Streamer");
    } else {
      res.send(streamsDb);
    }
  } catch (error) {
    res.status(404).send("Se rompio como mi corazon");
  }
};

const getStreamById = async (req, res) => {
  try {
    const { id } = req.params;
    const streamDb = await Streams.find({});
    if (id) {
      const filterStream = streamDb.filter((stream) => stream._id == id);
      filterStream.length
        ? res.send(filterStream)
        : res.send("Error al obtener Id de Stream");
    }
  } catch (error) {
    res.status(404).send("Se rompio como mi corazon");
  }
};

const deleteStream = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.send("Ingrese un Stream correcto");
    } else {
      Streams.deleteOne({ _id: id });
      res.send("Stream eliminado con exito");
    }
  } catch (error) {
    res.status(404).send("Se rompio como mi corazon");
  }
};

const createStream = async (req, res) => {
  try {
    const data = req.body;
    const stream = await Streams.create(data);
    res.send(stream);
  } catch (error) {
    res.send("Error en Stream");
  }
};

module.exports = { getStreams, getStreamById, deleteStream, createStream };
