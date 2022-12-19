import sessionStorage from "./fakeSessionStorage";

function testHelper() {
  const savedPassword = "";
  const savedUsername = "";
  const loginDetailsInput = {
    username: "",
    password: ""
  };
  const setLoginErrorStub = jest.fn();
  const setRedirectStub = jest.fn();
  const setLoginSessionStub = jest.fn();
  const fakeSessionStorageStub = sessionStorage;

  return {
    password: savedPassword,
    username: savedUsername,
    loginDetails: loginDetailsInput,
    setLoginError: setLoginErrorStub,
    setRedirect: setRedirectStub,
    setLoginSession: setLoginSessionStub,
    sessionStorage: fakeSessionStorageStub
  };
}

export default testHelper;
