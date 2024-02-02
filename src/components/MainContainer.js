import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  console.log(movies);
  if (!movies) return;
  const mainMovie = movies[0];
  console.log(mainMovie);
  return (
    <>
      <h2>MainContainer</h2>
    </>
  );
};

export default MainContainer;
