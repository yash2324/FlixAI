import React, { useRef, useState } from "react";
import { checkEmail } from "../utils/ValidateEmail";
import { checkPass } from "../utils/ValidatePass";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { backgroundImageUrl } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [emailMessage, setEmailMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [passMessage, setPassMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const handleClick = () => {
    const emailMessage = checkEmail(email.current.value);
    const passwordMessage = checkPass(password.current.value);
    setEmailMessage(emailMessage);
    setPassMessage(passwordMessage);
    if (emailMessage === null && passMessage === null) {
      if (!isSignIn) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            navigate("/browse");
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + ": " + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setErrorMessage("");
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;

            if (errorCode === "auth/invalid-credential") {
              setErrorMessage("Please Enter Correct Credintials");
            }
          });
      }
    }
  };
  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div
      className="bg-cover  bg-center min-h-screen overflow-x-hidden"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="relative bg-gradient-to-br from-black min-h-screen ">
        <Header />
        <div className="relative my-auto w-full">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-black bg-opacity-50 p-8 mb-10 sm:p-12 lg:p-20 max-w-sm mx-auto flex flex-col"
          >
            <h1 className="text-white text-3xl font-bold mb-6 ">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="border border-white/75 bg-transparent  rounded-sm text-white p-3 mb-4 "
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email address"
              className="border border-white/75 bg-transparent  rounded-sm text-white p-3  "
            />
            <p className="text-red-500 text-sm mb-4">{emailMessage}</p>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="border border-white/75 bg-transparent text-white p-3 "
            />
            <p className="text-red-500 text-sm mb-3">{passMessage}</p>
            <p className="text-red-500 text-sm mt-2 mb-3">{errorMessage}</p>
            <button
              onClick={handleClick}
              className="bg-red-700 hover:bg-red-800 text-white p-3 rounded-md font-bold"
              type="submit"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="text-white hover:text-gray-400 text-md mt-4 cursor-pointer"
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
