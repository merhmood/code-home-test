import React from "react";
import LoginInput from "../components/LoginInput";

type LoginDetails = {
  username: string;
  password: string;
};
type LoginFormProps = {
  loginDetails: LoginDetails;
  setLoginDetails: React.Dispatch<React.SetStateAction<LoginDetails>>;
  loginError: boolean;
  setButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm = ({
  loginDetails,
  setLoginDetails,
  loginError,
  setButtonClick,
}: LoginFormProps) => {
  return (
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
      {loginError && <p className="login-error">invalid login details</p>}
      <p>check the docs folder for the username and password</p>
      <button onClick={() => setButtonClick(true)}>Login</button>
    </form>
  );
};

export default LoginForm;
