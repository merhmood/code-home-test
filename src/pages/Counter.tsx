import React, { useLayoutEffect, useState } from "react";
import Input from "../components/Input";
import { Navigate } from "react-router-dom";
import CounterProps from "../types/CounterProps";

const Counter = ({ addToCounter, logOut }: CounterProps) => {
  const [redirect, setRedirect] = useState(false);
  const [counterInput, setCounterInput] = useState("");
  const [counterValue, setCounterValue] = useState(0);
  useLayoutEffect(() => {
    // This ensures the user login session is available before,
    // allowing the user to access this page
    if (
      sessionStorage.getItem("login") &&
      sessionStorage.getItem("login") === "false"
    ) {
      console.log("if statement ran");
      setRedirect(true);
    }
  }, []);
  return !redirect ? (
    <div className="counter">
      <div>
        <p>
          <span>counter</span> {counterValue}
        </p>
        <button
          onClick={() => {
            try {
              addToCounter(setCounterValue, counterInput, "increment");
            } catch (err: any) {
              console.error(err.message);
            }
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            try {
              addToCounter(setCounterValue, counterInput, "decrement");
            } catch (err: any) {
              console.error(err.message);
            }
          }}
        >
          decrement
        </button>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          placeholder="Your Input"
          inputType="text"
          inputValue={counterInput}
          onChange={(e) => setCounterInput(e.target.value)}
        />
        <button
          onClick={() => {
            try {
              addToCounter(setCounterValue, counterInput);
            } catch (err: any) {
              console.error(err.message);
            }
          }}
        >
          add to counter
        </button>
      </form>
      <button onClick={() => logOut(setRedirect, sessionStorage)}>
        Logout
      </button>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Counter;
