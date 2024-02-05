import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const DropdownMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="mt-0 text-white text-3xl">
        {/* Add your arrow SVG here */}
        &#9662; {/* Downward-pointing triangle character */}
      </button>

      {isDropdownOpen && (
        <div className="absolute w-32 top-10 right-0 mt-2 bg-gray-900 bg-opacity-90 hover:bg-red-700 border rounded shadow-md">
          <button
            onClick={handleSignOut}
            className="block w-full py-2 px-4  text-center text-white"
          >
            Sign Out
          </button>
          {/* Add other dropdown menu items as needed */}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
