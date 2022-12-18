import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [loginSession, setLoginSession] = useState(false);

  useEffect(() => {
    //Initialize the password using local storage
    localStorage.setItem("password", "234kJ24@2j");
    localStorage.setItem("username", "johnDoe");
    if (
      sessionStorage.getItem("login") &&
      sessionStorage.getItem("login") === "true"
    ) {
      setLoginSession(true);
    }
  }, []);

  useEffect(() => {
    // Get's the login credentials from local storage and
    // and perform needed checks
    const password = localStorage.getItem("password");
    const username = localStorage.getItem("username");
    loginDetailsAuthentication(
      password,
      username,
      loginDetails,
      setLoginError,
      setRedirect,
      setLoginSession,
      sessionStorage
    );
    // This ensures that when checks are done,
    // button is returned to its previous state
    setButtonClick(false);
  }, [buttonClick]);

  const loginFormParameter = {
    loginDetails,
    setLoginDetails,
    loginError,
    setButtonClick,
  };

  return !redirect && !loginSession ? (
    <LoginForm {...loginFormParameter} />
  ) : (
    <Navigate to="/counter" />
  );
};

function loginDetailsAuthentication(
  password: string | null,
  username: string | null,
  loginDetails: { username: string; password: string },
  setLoginError: React.Dispatch<React.SetStateAction<boolean>>,
  setRedirect: React.Dispatch<React.SetStateAction<boolean>>,
  setLoginSession: React.Dispatch<React.SetStateAction<boolean>>,
  sessionStorage: Storage
) {
  if (
    (password !== loginDetails.password && loginDetails.password !== "") ||
    (username !== loginDetails.username && loginDetails.username !== "")
  ) {
    setLoginError(true);
  } else {
    //redirects to counter page
    if (
      password === loginDetails.password &&
      username === loginDetails.username
    ) {
      setLoginError(false);
      setRedirect(true);
      //This allows manage the user login state among pages
      sessionStorage.setItem("login", "true");
      setLoginSession(true);
    }
  }
}

export default Login;
