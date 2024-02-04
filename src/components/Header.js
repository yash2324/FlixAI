import React from "react";
import { logoUrl, userLogo } from "../utils/constants";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleShowGPTSearch } from "../utils/GPTSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(toggleShowGPTSearch());
  };

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
    <div className="fixed top-0 z-50 flex flex-col md:flex-row items-center justify-between w-full px-8  bg-black text-white shadow-md">
      <Link to="/">
        <img src={logoUrl} alt="Netflix" className="w-[9rem] -my-2 " />
      </Link>
      {user && (
        <div className="flex flex-row justify-between p-2">
          <button
            className="self-center mx-auto mr-7"
            onClick={() => handleSearch}
          >
            GPT Search🔍
          </button>
          <img
            src={userLogo}
            alt="user"
            className="w-10 h-10  mr-7 self-center"
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
