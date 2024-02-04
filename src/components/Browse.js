import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const search = useSelector((store) => store.GPT?.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  console.log(search);
  return (
    <>
      <Header />
      <div>
        {search && <GPTSearch />}
        <MainContainer />
        <SecondaryContainer />
      </div>
      <Footer />
    </>
  );
};

export default Browse;
