import React from "react";
import renderer from "react-test-renderer";
import LoginForm from "../../components/LoginForm";

test("should render login form component with fake props", () => {
  const setLoginDetailsStub = jest.fn();
  const setButtonClickStub = jest.fn();
  const fakeProps = {
    loginDetails: { username: "someUsername", password: "somePassowrd" },
    setLoginDetails: setLoginDetailsStub,
    loginError: false,
    setButtonClick: setButtonClickStub
  };
  const tree = renderer.create(<LoginForm {...fakeProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
