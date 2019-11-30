import React from "react";
import SignUpTemplate from "../../components/signUp/SignUpTemplate/SignUpTemplate";

const SignUpPage = ({ ...props }) => {
  return <SignUpTemplate history={props.history} />;
};

export default SignUpPage;
