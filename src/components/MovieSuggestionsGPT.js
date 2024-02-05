import React from "react";
import { useSelector } from "react-redux";
import SuggestedCard from "./SuggestedCard";

const MovieSuggestionsGPT = () => {
  const { gptSearchList } = useSelector((store) => store.GPT);

  return (
    <>
      <div className="space-x-4 p-4">
        {gptSearchList && gptSearchList.length > 0 ? (
          <div>
            {gptSearchList.map((movie) => (
              <SuggestedCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-white rounded-md container h-96 mx-auto flex flex-col items-center justify-center capitalize font-bold text-xl bg-black text-center">
            <p>Search now to get results. Let the movie magic begin!</p>
            <p className="mt-5 text-gray-400 capitalize">
              This is an OpenAI based Movie Search.Now you don't need to think
              much about what movie to watch what genre it should be just write
              whatever you are feeling like and find your perfect Match 🤩
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieSuggestionsGPT;
