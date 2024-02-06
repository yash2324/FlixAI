import React from "react";
import { Link, useParams } from "react-router-dom";
import useGetMovieClip from "../Hooks/useGetMovieClip";

const PlayMovie = () => {
  const { movieId } = useParams();
  const key = useGetMovieClip(movieId);

  // Check if key is available before rendering the iframe
  if (key === null) {
    return (
      <div className="font-bold text-white flex flex-col justify-center text-center bg-black text-3xl h-screen w-screen">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (key === undefined) {
    return (
      <div className="font-bold flex justify-center flex-col text-center text-white bg-black text-3xl h-screen w-screen">
        <h2>Sorry : \ No Videos exist for this movie</h2>
        <h3 className="text-xl">Kindly choose some other movie</h3>
        <Link to="/" className="underline">
          Go to Home
        </Link>
      </div>
    );
  }
  return (
    <div className="w-screen h-screen">
      <iframe
        className="aspect-video w-screen h-screen"
        src={`https://www.youtube.com/embed/${key}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default PlayMovie;
