import React, { useRef, useState } from "react";
import { checkEmail } from "../utils/ValidateEmail";
import { checkPass } from "../utils/ValidatePass";
const Login = () => {
  const backgroundImageUrl =
    "https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg";

  const [isSignIn, setIsSignIn] = useState(true);
  const [emailMessage, setEmailMessage] = useState(null);
  const [passMessage, setPassMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleClick = () => {
    const emailMessage = checkEmail(email.current.value);
    const passwordMessage = checkPass(password.current.value);
    setEmailMessage(emailMessage);
    setPassMessage(passwordMessage);
  };
  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen overflow-x-hidden"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="relative bg-opacity-50 bg-gradient-to-b from-black min-h-screen ">
        <img
          src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
          alt="logo"
          className="w-56 bg-gradient-to-b from-black"
        />
        <div className="relative my-auto w-full">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-black bg-opacity-60 p-8 mb-10 sm:p-12 lg:p-20 max-w-sm mx-auto flex flex-col"
          >
            <h1 className="text-white text-3xl font-bold mb-6 ">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="border border-white/75 bg-black bg-opacity-60  rounded-sm text-white p-3 mb-4 "
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email address"
              className="border border-white/75 bg-black bg-opacity-60  rounded-sm text-white p-3  "
            />
            <p className="text-red-500 text-sm mb-4">{emailMessage}</p>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="border border-white/75 bg-black bg-opacity-60 text-white p-3 "
            />
            <p className="text-red-500 text-sm mb-6">{passMessage}</p>
            <button
              onClick={handleClick}
              className="bg-red-700 text-white p-3 rounded-md font-bold"
              type="submit"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="text-white text-md mt-4 cursor-pointer"
              onClick={handleSignIn}
            >
              {isSignIn
                ? "New to Netflix? Sign Up Now!"
                : "Already Registered ? Sign In Now!"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
