import loginAuthentication from "../../login/LoginAuthentication";
import testHelper from "../../utilities/loginAuthenticationTestHelper";

test("set login error should return true", () => {
  const savedPassword = "savedPassword";
  const savedUsername = "savePassword";
  const loginDetailsInput = {
    username: "someWrongPassword",
    password: "someWrongUserName"
  };
  const loginAuthenticationParameters = testHelper();
  const setLoginErrorMock = testHelper().setLoginError;
  loginAuthentication({
    ...loginAuthenticationParameters,
    password: savedPassword,
    username: savedUsername,
    loginDetails: loginDetailsInput,
    setLoginError: setLoginErrorMock
  });
  expect(setLoginErrorMock.mock.calls[0][0]).toBe(true);
});
