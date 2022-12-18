import React, { useEffect, useState } from "react";
import LoginInput from "../components/LoginInput";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);

  useEffect(() => {
    //Initialize the password using local storage
    localStorage.setItem("password", "234kJ24@2j");
    localStorage.setItem("username", "johnDoe");
  }, []);

  useEffect(() => {
    // Get's the login credentials from local storage and
    // and perform needed checks
    const password = localStorage.getItem("password");
    const username = localStorage.getItem("username");
    loginDetailsAuthentication(password, username, loginDetails, setLoginError);
    // This ensures that when checks are done,
    // button is returned to its previous state
    setButtonClick(false);
  }, [buttonClick]);
  return (
    <div className="App">
      <form
        onSubmit={
          // This prevent the default action of the form from firing.
          // This allows enable us to get the input fields without,
          // submitting the form
          (e) => e.preventDefault()
        }
      >
        {/* The username and password is also located in the docs folder */}
        <LoginInput
          inputType="text"
          placeholder="Username"
          inputValue={loginDetails.username}
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, username: e.target.value })
          }
        />
        <LoginInput
          inputType="password"
          placeholder="Password"
          inputValue={loginDetails.password}
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, password: e.target.value })
          }
        />
        {loginError && <p>invalid login details</p>}
        <p>check the docs folder for the username and password</p>
        <button onClick={() => setButtonClick(true)}>Login</button>
      </form>
    </div>
  );
};

function loginDetailsAuthentication(
  password: string | null,
  username: string | null,
  loginDetails: { username: string; password: string },
  setLoginError: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (
    (password !== loginDetails.password && loginDetails.password !== "") ||
    (username !== loginDetails.username && loginDetails.username !== "")
  ) {
    setLoginError(true);
  } else if (
    password === loginDetails.password &&
    username === loginDetails.username
  ) {
    setLoginError(false);
    console.log("redirected");
  }
}

export default Login;
