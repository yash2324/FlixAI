import React from "react";
import {
  SUPPORTED_LANGUAGES,
  logoUrl,
  search,
  userLogo,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleShowGPTSearch } from "../utils/GPTSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/langConstants";
const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGPTSearch = useSelector((store) => store.GPT?.showGPTSearch);

  const handleSearch = () => {
    dispatch(toggleShowGPTSearch());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
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
          {showGPTSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="self-center mx-auto mr-7 ml-3"
            onClick={handleSearch}
          >
            {!showGPTSearch ? (
              <>
                <p className="inline my-auto">GPT Search </p>
                <img className="inline w-4 pb-1" src={search} alt="🔍" />
              </>
            ) : (
              <p className="inline my-auto">Home </p>
            )}
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
