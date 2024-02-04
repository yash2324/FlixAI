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
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();

  return (
    <>
      <Header />
      <div>
        <GPTSearch />
        <MainContainer />
        <SecondaryContainer />
      </div>
      <Footer />
    </>
  );
};

export default Browse;
