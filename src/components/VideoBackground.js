import React from "react";
import useGetMovieTrailer from "../Hooks/useGetMovieTrailer";

const VideoBackground = ({ id }) => {
  const key = useGetMovieTrailer(id);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen overflow-x-hidden aspect-video"
        src={`https://www.youtube.com/embed/${key}?&playlist=${key}&loop=1&autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
