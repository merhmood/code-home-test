import React from "react";
import InputProps from "../types/InputProps";

const Input = ({
  placeholder,
  inputValue,
  inputType,
  onChange
}: InputProps) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
      type={inputType}
      value={inputValue}
      onChange={onChange}
    />
  );
};

export default Input;
