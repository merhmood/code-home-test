import React from "react";

type LoginInputProps = {
  placeholder: string;
  inputValue: string;
  inputType: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginInput = ({
  placeholder,
  inputValue,
  inputType,
  onChange,
}: LoginInputProps) => {
  return (
    <input
      className="login-input"
      placeholder={placeholder}
      type={inputType}
      value={inputValue}
      onChange={onChange}
    />
  );
};

export default LoginInput;
