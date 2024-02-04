import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="relative -mt-52 z-10">
        <MovieList
          title={"Top Picks For You"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList title={"Popular"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
