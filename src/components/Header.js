import React from "react";
import { logoUrl, userLogo } from "../utils/constants";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

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
    <div className="bg-black h-18 bg-opacity-95 flex text-white justify-between">
      <img src={logoUrl} alt="Netflix" className="w-36 ml-5 " />
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
