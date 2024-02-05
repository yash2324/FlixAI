import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Footer = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-gray-700 text-white p-4 ">
      <div className="flex justify-center  space-x-4">
        <a
          href="https://github.com/yash2324"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <img
            className="h-8 w-8"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
          />
        </a>

        <a
          href="https://linkedin.com/in/yash-gupta-012769206/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <img
            className="h-8 w-8"
            src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png"
            alt="LinkedIn"
          />
        </a>

        <a
          href="https://twitter.com/yashgupta023"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <img
            className="h-8 w-8"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-logo-icon.png"
            alt="Twitter"
          />
        </a>
      </div>

      <p className="text-center mt-4">
        Made By{" "}
        <a
          href="https://linkedin.com/in/yash-gupta-012769206/"
          className="text-white hover:text-gray-400"
        >
          Yash Gupta
        </a>
      </p>
    </div>
  );
};

export default Footer;
