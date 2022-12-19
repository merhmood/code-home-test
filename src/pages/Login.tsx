import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import loginAuthentication from "../login/LoginAuthentication";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: ""
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
    const loginAuthenticationParameters = {
      password,
      username,
      loginDetails,
      setLoginError,
      setRedirect,
      setLoginSession,
      sessionStorage
    };
    loginAuthentication(loginAuthenticationParameters);
    // This ensures that when checks are done,
    // button is returned to its previous state
    setButtonClick(false);
  }, [buttonClick]);

  const loginFormParameter = {
    loginDetails,
    setLoginDetails,
    loginError,
    setButtonClick
  };

  return !redirect && !loginSession ? (
    <div className="login">
      <LoginForm {...loginFormParameter} />
    </div>
  ) : (
    <Navigate to="/counter" />
  );
};

export default Login;
