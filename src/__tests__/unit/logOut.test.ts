import logOut from "../../counter/logOut";
import sessionStorage from "../../utilities/fakeSessionStorage";

let fakeSessionStorage: Storage;
beforeEach(() => {
  fakeSessionStorage = sessionStorage;
});

test("should set login session to false", () => {
  const redirectStub = jest.fn();
  const sessionStorageMock = fakeSessionStorage;
  logOut(redirectStub, sessionStorageMock);
  const expected = sessionStorageMock.getItem("login");
  expect(expected).toBe("false");
});

test("redirect should be ture when logout fuction is called", () => {
  const redirectMock = jest.fn();
  const sessionStorageStub = fakeSessionStorage;
  logOut(redirectMock, sessionStorageStub);
  expect(redirectMock.mock.calls[0][0]).toBe(true);
});
