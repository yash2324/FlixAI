import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/movieSlice";
const useTopRated = () => {
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      options
    );

    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRated;
