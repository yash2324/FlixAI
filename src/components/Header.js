import React from "react";
import { logoUrl, userLogo } from "../utils/constants";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute top-0 z-10 flex flex-col md:flex-row items-center justify-between w-full px-8 py-2 bg-black text-white shadow-md">
      <Link to="/">
        <img src={logoUrl} alt="Netflix" className="w-36 ml-5 " />
      </Link>
      {user && (
        <div className="flex flex-row p-2">
          <img
            src={userLogo}
            alt="user"
            className="w-10 h-10 mr-10 self-center"
          />
          <button onClick={handleSignOut} className="mt-0">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
