import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black pb-24">
      <div className="relative -mt-52 z-10">
        <MovieList
          title={"Top Picks For You"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRated} />
        <MovieList title={"Upcoming"} movies={movies?.upcoming} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
