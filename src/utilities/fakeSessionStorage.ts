const fakeSessionStorage = (() => {
  //acts as storage mechanism to store the session key and value
  let store: any = {};
  return {
    getItem(key: string) {
      return store[key];
    },
    clear: jest.fn(),
    setItem(key: string, value: string) {
      store[key] = value;
    },
    removeItem: jest.fn(),
    length: 1,
    key: jest.fn()
  };
})();

export default fakeSessionStorage;
