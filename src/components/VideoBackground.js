import React from "react";
import useGetMovieTrailer from "../Hooks/useGetMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  useGetMovieTrailer(id);
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  return (
    <div className="w-screen mt-24 sm:mt-0">
      <iframe
        className="w-screen overflow-x-hidden aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&playlist=${trailerVideo?.key}&loop=1&autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
