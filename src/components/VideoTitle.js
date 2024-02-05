import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="mt-6 sm:mt-0 absolute w-screen px-6 md:px-12 text-white aspect-video bg-gradient-to-r from-black pt-[15%] ">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block w-[40%] py-6 text-lg">{overview}</p>
      <div className="none md:flex md:flex-wrap gap-2 mt-4">
        <button className="px-4 mr-2 md:mr-0 md:px-12 py-2 md:py-4 text-sm md:text-xl font-medium text-black bg-white rounded-md hover:bg-opacity-80 transition-all duration-[.2s]">
          ▶️ Play
        </button>
        <button className="none md:flex px-4 md:px-12 py-2 md:py-4 text-sm md:text-xl font-medium text-white bg-gray-500 rounded-md hover:bg-opacity-80 transition-all duration-[.2s] lg:flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:inline ltr-4z3qvp e1svuwfo1"
            data-name="CircleI"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
              fill="currentColor"
            ></path>
          </svg>
          <h2> More Info</h2>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
