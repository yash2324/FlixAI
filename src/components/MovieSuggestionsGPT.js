import React from "react";
import { useSelector } from "react-redux";
import SuggestedCard from "./SuggestedCard";
const MovieSuggestionsGPT = () => {
  const { gptSearchList } = useSelector((store) => store.GPT);
  return (
    <>
      <div className=" space-x-4 p-4">
        <div className="">
          {gptSearchList?.map((movie) => (
            <SuggestedCard movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieSuggestionsGPT;
