import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Counter = () => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    // This ensures the user login session is available before,
    // allowing the user to access this page
    if (
      sessionStorage.getItem("login") &&
      sessionStorage.getItem("login") === "false"
    ) {
      console.log("if statement ran");
      setRedirect(true);
    }
  }, []);
  return !redirect ? (
    <div>
      Counter
      <button onClick={() => logOut(setRedirect, sessionStorage)}>
        Logout
      </button>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

function logOut(
  setRedirect: React.Dispatch<React.SetStateAction<boolean>>,
  sessionStorage: Storage
) {
  sessionStorage.setItem("login", "false");
  setRedirect(true);
}

export default Counter;
