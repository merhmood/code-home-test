export type LoginDetails = {
  username: string;
  password: string;
};
type LoginFormProps = {
  loginDetails: LoginDetails;
  setLoginDetails: React.Dispatch<React.SetStateAction<LoginDetails>>;
  loginError: boolean;
  setButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export default LoginFormProps;
