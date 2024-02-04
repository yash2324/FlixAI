import React from "react";
import { IMG_TMDB } from "../utils/constants";
const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="w-48 px-4">
        <img alt="movie poster" src={IMG_TMDB + movie.poster_path} />
      </div>
    </>
  );
};

export default MovieCard;
