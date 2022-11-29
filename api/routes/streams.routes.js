const Express = require("express");
const {
  getStreams,
  getStreamById,
  deleteStream,
  createStream,
} = require("../controllers/streams.controller");

const router = Express.Router();

router.get("/streams", getStreams);

router.get("/streams/:id", getStreamById);

router.delete("/streams/:id", deleteStream);

router.post("/streams", createStream);

module.exports = router;
