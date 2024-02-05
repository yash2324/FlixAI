import React from "react";
import SearchBarGPT from "./SearchBarGPT";
import MovieSuggestionsGPT from "./MovieSuggestionsGPT";
import { backgroundImageGPTUrl } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="relative bg-black min-h-screen overflow-hidden">
        <div className="fixed inset-0 z-10 opacity-65">
          <img
            className="h-screen w-screen object-cover opacity-90"
            src={backgroundImageGPTUrl}
            alt="background"
          />
          <div className="bg-black bg-opacity-50 h-full w-full"></div>
        </div>
        <div className="relative z-20 text-white">
          <SearchBarGPT />
          <MovieSuggestionsGPT />
        </div>
      </div>
    </>
  );
};

export default GPTSearch;
