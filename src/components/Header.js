import React from "react";
import { logoUrl } from "../utils/constants";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-black">
      <img src={logoUrl} alt="logo" className="w-56 " />
    </div>
  );
};

export default Header;
