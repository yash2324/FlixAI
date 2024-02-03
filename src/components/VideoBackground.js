import React, { useEffect } from "react";
import { options } from "../utils/constants";

const VideoBackground = ({ id }) => {
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/572802/videos?language=en-US",
      options
    );
    const json = await data.json();
    const filterData = json?.results.filter(
      (videos) => videos.type === "Trailer"
    );
    const trailer = filterData[0];
    console.log(trailer);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <>
      <div>VideoBackground</div>
    </>
  );
};

export default VideoBackground;
