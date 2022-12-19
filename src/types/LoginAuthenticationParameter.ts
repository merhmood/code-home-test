type LoginAuthenticationParameters = {
  password: string | null;
  username: string | null;
  loginDetails: {
    username: string;
    password: string;
  };
  setLoginError: React.Dispatch<React.SetStateAction<boolean>>;
  setRedirect: React.Dispatch<boolean>;
  setLoginSession: React.Dispatch<boolean>;
  sessionStorage: Storage;
};

export default LoginAuthenticationParameters;
