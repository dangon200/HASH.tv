const Users = require("../models/Users");
const Streams = require("../models/Stream");

const makeReview = async (req, res) => {
  const { id } = req.params;
  const { name, comments } = req.body;
  const newReview = new Review({
    name,
    comments,
  });
  if (name) {
    const foundUser = await Users.findOne({ name: { $in: name } });
    if (foundUser) {
      newReview.name = foundUser;
      const savedReview = await newReview.save();
      res.json(savedReview);
    } else {
      res
        .status(400)
        .json({ message: "User not found, please enter a valid name" });
    }
  }
  if (id) {
    const foundStream = await Streams.findOne({ _id: id });
    if (foundStream) {
      foundStream.reviews = [...foundStream.reviews, newReview._id];
      const savedStream = await foundStream.save();
    }
  }
};

module.exports = { makeReview };
