import React from "react";
import SearchBarGPT from "./SearchBarGPT";
import MovieSuggestionsGPT from "./MovieSuggestionsGPT";
import { backgroundImageUrl } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div
      className="relative z-40 h-screen bg-black text-white"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <SearchBarGPT />
      <MovieSuggestionsGPT />
    </div>
  );
};

export default GPTSearch;
