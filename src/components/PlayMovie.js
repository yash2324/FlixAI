import React from "react";
import { useParams } from "react-router-dom";
import useGetMovieClip from "../Hooks/useGetMovieClip";

const PlayMovie = () => {
  const { movieId } = useParams();
  const key = useGetMovieClip(movieId);

  // Check if key is available before rendering the iframe
  if (!key) {
    return (
      <div className="font-bold text-white bg-black text-3xl h-screen w-screen">
        <h2>Loading...</h2>
      </div>
    );
  }

  console.log(key);

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
