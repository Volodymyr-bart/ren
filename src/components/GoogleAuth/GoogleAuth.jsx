import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { SlLogout } from "react-icons/sl";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import HeaderStyled from "./GoogleAuth.styled";

function GooglePanel() {
  const [user, setUser] = useLocalStorage("user", null);
  const [profile, setProfile] = useLocalStorage("profile", null);
  const [isLoad, setIsLoad] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    setIsLoad(false);
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          setProfile(res.data);
          setIsLoad(true);
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
  };

  return (
    <HeaderStyled>
      {isLoad ? (
        <>
          <button onClick={logOut}>
            <SlLogout />
            Log out
          </button>
          <img src={profile?.picture} alt="user" />
          <p>Welcome: {profile?.name}</p>
          <p>Email: {profile?.email}</p>
        </>
      ) : (
        <button onClick={() => login()}>
          <FcGoogle />
          Sign in with Google
        </button>
      )}
    </HeaderStyled>
  );
}
export default GooglePanel;
