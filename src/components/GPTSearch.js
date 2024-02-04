import React from "react";
import SearchBarGPT from "./SearchBarGPT";
import MovieSuggestionsGPT from "./MovieSuggestionsGPT";
import { backgroundImageUrl } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10 bg-black opacity-95">
        <img
          className="h-screen w-screen object-cover "
          src={backgroundImageUrl}
          alt="background"
        />
      </div>
      <div className=" text-white">
        <SearchBarGPT />
        <MovieSuggestionsGPT />
      </div>
    </>
  );
};

export default GPTSearch;
