const Users = require("../models/Users");
const Streams = require("../models/Stream");
const Ratings = require("../models/Ratings");

const votedRating = async (req, res) => {
  const { id, score, idStream } = req.body;
  if (id) {
    const foundUser = await Users.findById(id);
    if (foundUser.voted === false) {
      const newRating = new Ratings({
        name: id,
        score,
      });
      const changeVoted = await Users.findByIdAndUpdate(id, { voted: true });
      newRating.name = foundUser;
      const savedRating = await newRating.save();
      if (idStream) {
        const foundStream = await Streams.findById(idStream);
        if (foundStream) {
          foundStream.rating = [...foundStream.rating, newRating._id];
          const savedRatingStream = await foundStream.save();
        }
      }
      res.json(savedRating);
    } else {
      res.status(400).json({ message: "this user already voted" });
    }
  }
};

module.exports = { votedRating };
