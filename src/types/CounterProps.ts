type CounterProps = {
  addToCounter: (
    setCounterValue: React.Dispatch<React.SetStateAction<number>>,
    counterInput?: string,
    counterAction?: string
  ) => void;
  logOut: (
    setRedirect: React.Dispatch<React.SetStateAction<boolean>>,
    sessionStorage: Storage
  ) => void;
};

export default CounterProps;
