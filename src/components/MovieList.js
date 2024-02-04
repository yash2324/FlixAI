import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-10">
      <h2 className="text-white text-3xl ml-5 py-2">{title}</h2>
      <div className=" flex overflow-x-scroll">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
