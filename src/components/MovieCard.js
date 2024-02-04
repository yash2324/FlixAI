import React from "react";
import { IMG_TMDB } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="relative w-48 px-4 overflow-hidden transition-transform transform hover:scale-110 cursor-pointer">
        <img
          alt="movie poster"
          src={IMG_TMDB + movie.poster_path}
          className="w-full h-auto"
        />
      </div>
    </>
  );
};

export default MovieCard;
