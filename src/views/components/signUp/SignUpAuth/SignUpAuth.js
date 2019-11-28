import React from "react";
import styles from "./SignUpAuth.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import SignUpForm from "../SignUpForm/SignUpForm";

const cx = classNames.bind(styles);

const SignUpAuth = ({ ...props }) => {
  return (
    <>
      <SignUpForm title="인증코드" type="auth" />
      <div className={cx("sign-up__return")}>인증코드 다시받기</div>
      <button
        onClick={() => {
          props.setIsAuth(true);
        }}
      >
        다음
      </button>
    </>
  );
};

SignUpAuth.propTypes = {
  setIsAuth: PropTypes.func
};

SignUpAuth.defaultProps = {
  setIsAuth: () => {
    console.log("setIsAuth is null");
  }
};

export default SignUpAuth;
