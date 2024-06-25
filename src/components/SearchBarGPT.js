import openai from "../utils/openai";
import React, { useState } from "react";
import lang from "../utils/langConstants";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { options } from "../utils/constants";
import { addGPTSearchList } from "../utils/GPTSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { OpenAi_key } from "../utils/constants";

const SearchBarGPT = () => {
  const searchText = useRef(null);
  const genAI = new GoogleGenerativeAI(OpenAi_key);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=true&language=en-US&page=1`,
      options
    );
    const json = await data.json();
    return json.results;
  };
  const handleGPTSearchClick = async () => {
    try {
      setLoading(true); // Set loading state to true

      const gptQuery =
        "act as a movie reccomendation system and suggest some movies for the query : " +
        (searchText.current?.value || "") +
        ". only give me ten movies, comma separated like the example given ahead. Example : Gadar , Border , Sholay , Don, Andaz Apna Apna, 3 idiots, knives out, grand budapest hostel, The shawshank redemption, 12th fail";

      const completion = await model.generateContent(gptQuery);
      const gptMovies =
        completion?.response?.candidates?.[0]?.content?.parts?.[0]?.text?.split(
          ","
        ) || [];
      const promiseArray = gptMovies.map((movie) =>
        searchMovieTMDB(movie.trim())
      );
      const TMDBResults = await Promise.all(promiseArray);
      const firstElements = TMDBResults.map((subArray) => subArray[0]);
      dispatch(addGPTSearchList(firstElements));
    } catch (error) {
      console.error("Error processing GPT search:", error);
    } finally {
      setLoading(false); // Set loading state to false, whether success or error
    }
  };

  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="m-4 pt-24 sm:pt-0 flex flex-col justify-center">
      <div className="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
        <div className="overflow-hidden z-0 rounded-full relative p-3">
          <form
            role="form"
            className="relative flex z-50 border-4 bg-white border-black rounded-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              ref={searchText}
              type="text"
              placeholder={lang[langKey].gptSearchPlaceholder}
              className="rounded-full w-2/3 mf:w-auto flex-1 px-6 py-4 text-gray-700 focus:outline-none"
            />
            <button
              className="bg-red-700 text-white text-center rounded-full font-semibold px-4 sm:px-8 py-4 hover:bg-red-600 focus:bg-red-800 focus:outline-none"
              onClick={handleGPTSearchClick}
            >
              {loading ? "Searching..." : lang[langKey].search}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SearchBarGPT;
