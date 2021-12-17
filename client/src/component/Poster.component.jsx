import React from "react";
// import { Link } from "react-router-dom";
import Rating from "react-rating-stars-component";

function Poster(props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className=" flex flex-col items-start gap-1 my-4 border border-none py-3 px-4 rounded-md hover:shadow-lg ">
      <img
        src={props.src}
        alt="poster"
        className="w-full rounded-md h-80 "
      />
      <h3 className=" text-lg font-semibold text-gray-700 my-2 ">
        Fast and Furious 10
      </h3>
      <Rating
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      <p className=" text-sm font-bold text-gray-700">Release Date: 2021</p>
    </div>
  );
}

export default Poster;
