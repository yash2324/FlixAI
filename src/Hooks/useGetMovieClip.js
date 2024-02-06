import { useEffect, useState } from "react";
import { options } from "../utils/constants";
const useGetMovieClip = (id) => {
  const [key, setKey] = useState(null);
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    const json = await data.json();
    const filterData = json?.results.filter(
      (videos) => videos.type === "Trailer" || videos
    );
    const trailer = filterData.length ? filterData[0] : json?.results[0];
    setKey(trailer?.key);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return key;
};

export default useGetMovieClip;
