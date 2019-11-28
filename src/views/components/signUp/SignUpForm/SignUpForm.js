import React from "react";
import styles from "./SignUpForm.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import InputBox from "../../InputBox";

const cx = classNames.bind(styles);

const SignUpForm = ({ ...props }) => {
  return (
    <div className={cx("sign-up")}>
      <span className={cx("sign-up__title")}>{props.title}</span>
      <div className={cx("sign-up__input")}>
        <InputBox
          type={props.type}
          validation={props.validation}
          isValidation={props.isValidation}
        />
      </div>
    </div>
  );
};

SignUpForm.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  validation: PropTypes.func,
  isValidation: PropTypes.bool
};

SignUpForm.defaultProps = {
  title: "title is null",
  type: "email",
  validation: () => {
    console.log("form validation is null");
  },
  isValidation: false
};

export default SignUpForm;
