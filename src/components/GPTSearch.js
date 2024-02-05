import React from "react";
import SearchBarGPT from "./SearchBarGPT";
import MovieSuggestionsGPT from "./MovieSuggestionsGPT";
import { backgroundImageUrl } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <body className="bg-black bg-opacity-50">
        <div className="fixed -z-10">
          <img
            className="h-screen w-screen object-cover"
            src="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
            alt="background"
          />
        </div>
        <div className="relative text-white">
          <SearchBarGPT />
          <MovieSuggestionsGPT />
        </div>
      </body>
    </>
  );
};

export default GPTSearch;
