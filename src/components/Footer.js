import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Footer = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  console.log("Footer");
  console.log("User in Header component:", user);
  const navigate = useNavigate();
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        setRedirected(true);
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [dispatch, navigate]);

  useEffect(() => {
    if (redirected && user) {
      navigate("/browse");
    }
    if (user === null) {
      navigate("/");
    }
  }, [redirected, user, navigate]);

  return (
    <>
      <div>Footer</div>
    </>
  );
};

export default Footer;
