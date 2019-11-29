import React from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import PropTypes from "prop-types";

const SignUpPrivate = ({ ...props }) => {
  return (
    <>
      <SignUpForm
        title="닉네임"
        type="nickname"
        handleChange={props.setUsername}
      />
      <SignUpForm
        title="비밀번호"
        type="password"
        handleChange={props.setUserpwd}
      />
      <SignUpForm
        title="비밀번호 재확인"
        type="check-password"
        validation={props.validation}
      />
      <button onClick={props.handleSignUp}>가입</button>
    </>
  );
};

SignUpPrivate.propTypes = {
  validation: PropTypes.func.isRequired
};

SignUpPrivate.defaultProps = {
  validation: () => {
    console.log("signUpPrivate validation is null");
  }
};
export default SignUpPrivate;
