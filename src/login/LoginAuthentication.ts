import LoginAuthenticationParameters from "../types/LoginAuthenticationParameter";

function loginAuthentication(
  loginAuthenticationParamters: LoginAuthenticationParameters
) {
  const {
    password,
    username,
    loginDetails,
    setLoginError,
    setRedirect,
    setLoginSession,
    sessionStorage
  } = loginAuthenticationParamters;
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

export default loginAuthentication;
