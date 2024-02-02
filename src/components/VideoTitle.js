import React from "react";
import { moreInfo } from "../utils/constants";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className=" ml-10">
        <h2 className="font-bold text-4xl capitalize mt-44 ">{title}</h2>
        <p className="mt-4 w-1/3 font-semibold">{overview}</p>
      </div>
      <div className="flex ">
        <button className="bg-gray-500 text-white ml-10 mt-5 mr-4 px-5 py-2 text-2xl items-center rounded-md">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white mt-5 mr-4 px-5 text-2xl rounded-md">
          ℹ More Info
        </button>
      </div>
    </>
  );
};

export default VideoTitle;
