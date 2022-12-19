function logOut(
  setRedirect: React.Dispatch<React.SetStateAction<boolean>>,
  sessionStorage: Storage
) {
  sessionStorage.setItem("login", "false");
  setRedirect(true);
}

export default logOut;
