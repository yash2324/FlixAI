import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <Header />
      <div>
        <MainContainer />
        {/* <SecondaryContainer /> */}
      </div>
      <Footer />
    </>
  );
};

export default Browse;
