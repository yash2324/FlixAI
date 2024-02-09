import React, { useRef, useState } from "react";
import { checkEmail } from "../utils/ValidateEmail";
import { checkPass } from "../utils/ValidatePass";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { backgroundImageUrl, logoUrl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import Footer from "./Footer";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [emailMessage, setEmailMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [passMessage, setPassMessage] = useState(null);
  const [defaultEmail, setDefaultEmail] = useState("Yash@email.com");
  const [defaultPassword, setDefaultPassword] = useState("Yash@123");
  const user = useSelector((store) => store.user);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
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
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
            })
              .then(() => {
                const { uid, email, displayName } = auth.currentUser;
                dispatch(addUser({ uid, email, displayName }));
              })
              .catch((error) => {
                // An error occurred
                // ...
              });
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
    <>
      <div
        className="bg-cover  bg-center min-h-screen overflow-x-hidden"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      >
        <div className="relative bg-gradient-to-b from-black sm:bg-gradient-to-br min-h-screen ">
          <img src={logoUrl} alt="logo" className="w-56 mx-auto sm:mx-0" />
          <div className="relative mt-[40%] sm:my-auto w-full">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-black bg-opacity-50  p-8 mb-10 sm:p-12 lg:p-20 max-w-sm mx-auto flex flex-col"
            >
              <h1 className="text-white text-3xl font-bold mb-6 ">
                {isSignIn ? "Sign In" : "Sign Up"}
              </h1>
              {!isSignIn && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Full Name"
                  className="border border-white/75 bg-transparent  rounded-sm text-white p-3 mb-4 "
                />
              )}
              <input
                ref={email}
                type="text"
                placeholder="Email address"
                value={!isSignIn ? "" : defaultEmail}
                onChange={(e) => setDefaultEmail(e.target.value)}
                className="border border-white/75 bg-transparent  rounded-sm text-white p-3  "
              />
              <p className="text-red-500 text-sm mb-4">{emailMessage}</p>
              <input
                ref={password}
                type="password"
                placeholder="Password"
                value={!isSignIn ? "" : defaultPassword}
                onChange={(e) => setDefaultPassword(e.target.value)}
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
      <Footer />
    </>
  );
};

export default Login;
