import React from "react";
import renderer from "react-test-renderer";
import Counter from "../../pages/Counter";
import CounterProps from "../../types/CounterProps";

test("should render counter page with stubs", () => {
  const addToCounterStub = jest.fn();
  const logOutStub = jest.fn();
  const fakeProps: CounterProps = {
    addToCounter: addToCounterStub,
    logOut: logOutStub
  };
  const tree = renderer.create(<Counter {...fakeProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
