import { useEffect } from "react";
import { options } from "../utils/constants";
const useMoreInfo = () => {
  const [IMDBId, setIMDBId] = useState(null);

  const getIMDBId = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}`,
      options
    );

    const json = await data.json();
    setIMDBId(json?.imdb_id);
  };

  useEffect(() => {
    getIMDBId();
  }, []);
  return IMDBId;
};

export default useMoreInfo;
