import addToCounter from "../../counter/addToCounter";

test("set counter value should be called", () => {
  const fakeCounterInput = "23";
  const setCounterValueMock = jest.fn();
  addToCounter(setCounterValueMock, fakeCounterInput);

  expect(setCounterValueMock).toBeCalled();
});

test("ensures errors are thrown for wrong arguements", () => {
  const fakeCounterInput = "23";
  const setCounterValueStub = jest.fn();
  const expected = () =>
    addToCounter(setCounterValueStub, fakeCounterInput, "wrongarguement");

  expect(expected).toThrow(
    "check arguments to ensure the need parameters are passed"
  );
});
