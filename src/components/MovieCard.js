import React from "react";
import { IMG_TMDB } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, id }) => {
  return (
    <>
      <Link to={"/movie/" + id}>
        <div className="relative w-48 px-4 overflow-hidden transition-transform transform hover:scale-110 ">
          <img
            alt="movie poster"
            src={IMG_TMDB + movie.poster_path}
            className="w-full h-auto"
          />
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
