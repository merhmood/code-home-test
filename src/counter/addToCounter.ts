function addToCounter(
  setCounterValue: React.Dispatch<React.SetStateAction<number>>,
  counterInput?: string,
  counterAction?: string
) {
  if (counterInput && !counterAction && setCounterValue) {
    let counterInputInteger = parseInt(counterInput);
    setCounterValue((state) => state + counterInputInteger);
  } else {
    if (counterAction === "increment") {
      setCounterValue((state) => state + 1);
    } else if (counterAction === "decrement") {
      setCounterValue((state) => state - 1);
    } else {
      throw new Error(
        "check arguments to ensure the need parameters are passed"
      );
    }
  }
}

export default addToCounter;
