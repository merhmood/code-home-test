import React from "react";
import renderer from "react-test-renderer";
import Input from "../../components/Input";

test("should render input component with fake props", () => {
  const onChangeStub = jest.fn();
  const fakeDataProps = {
    placeholder: "username",
    inputValue: "someRandomUserName",
    inputType: "text",
    onChange: onChangeStub
  };
  const tree = renderer.create(<Input {...fakeDataProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
