import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import "./Rating.css";
import { makeRating } from "../../store/actions/actions";

function validate(rating) {
  let error = {};
  rating.score > 5 || rating.score < 0
    ? (error.score = "You can only choose from 1 to 5")
    : (error.score = "");
  rating.id ? (error.id = "") : (error.id = "You must provide an id");
  return error;
}

export default function Rating() {
  let { id } = useParams();
  console.log("🚀 ~ file: Rating.jsx:19 ~ Rating ~ id", id);
  const cookie = new Cookies();
  const dispatch = useDispatch();
  const user = cookie.get("TOKEN");
  console.log("🚀 ~ file: Rating.jsx:7 ~ Rating ~ user", user.user);
  const [rating, setRating] = useState({
    score: 0,
    id: user.user._id,
    idStream: id,
  });
  console.log("🚀 ~ file: Rating.jsx:20 ~ Rating ~ rating", rating);
  const [error, setError] = useState({});

  function handleChange(e) {
    setRating({
      ...rating,
      score: e.target.value,
    });
    setError(validate(rating));
  }

  function handleSubmit(e) {
    if (rating.score && rating.id) {
      e.preventDefault();
      dispatch(makeRating(rating));
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Puntua este directo: </label>
        <input
          onChange={(e) => handleChange(e)}
          type="number"
          name="score"
          value={rating.score}
          style={{ height: "20px", width: "40px" }}
          className={rating.score === "voted" ? "voted" : "not-voted"}
        />
        <button type="submit">Vote</button>
      </form>
      {error.score && <p>{error.score}</p>}
      {error.id && <p>{error.id}</p>}
    </div>
  );
}
