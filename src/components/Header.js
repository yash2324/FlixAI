import React from "react";
import { logoUrl } from "../utils/constants";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  console.log("User in Header component:", user);

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
    <div className="bg-gradient-to-b from-black flex justify-between">
      <img src={logoUrl} alt="Netflix" className="w-56 " />
      {user && (
        <div className="flex flex-row p-2">
          <img
            src="https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229"
            alt="user"
            className="w-12 h-12 mr-10 self-center"
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
