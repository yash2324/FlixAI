import React from "react";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const SearchBarGPT = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="m-4 flex flex-col justify-center">
      <div className="relative  p-12 w-full sm:max-w-2xl sm:mx-auto">
        <div className="overflow-hidden z-0 rounded-full relative p-3">
          <form
            role="form"
            className="relative flex z-50 border-4 bg-white border-black rounded-full"
          >
            <input
              type="text"
              placeholder={lang[langKey].gptSearchPlaceholder}
              className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
            />
            <button className="bg-red-700 text-white rounded-full font-semibold px-8 py-4 hover:bg-red-600 focus:bg-red-800 focus:outline-none">
              {lang[langKey].search}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SearchBarGPT;
