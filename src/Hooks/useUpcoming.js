import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcoming } from "../utils/movieSlice";
const useUpcoming = () => {
  const dispatch = useDispatch();
  const upcoming = useSelector((store) => store.movie?.upcoming);
  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=2",
      options
    );

    const json = await data.json();
    dispatch(addUpcoming(json.results));
  };

  useEffect(() => {
    !upcoming && getUpcoming();
  }, []);
};

export default useUpcoming;
