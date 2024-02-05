import { useEffect, useState } from "react";
import { options } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const useGetMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    const json = await data.json();
    const filterData = json?.results.filter(
      (videos) => videos.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json?.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useGetMovieTrailer;
