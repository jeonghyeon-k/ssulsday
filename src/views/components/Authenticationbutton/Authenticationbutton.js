import React from "react";
import classNames from "classnames/bind";
import styles from "./Authenticationbutton.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

<<<<<<< HEAD
const Authenticationbutton = ({ done }) => {
  return (
    <div className={cx("Authenticationbutton", done && "done")}>
      {" "}
=======
const Authenticationbutton = ({ ...props }) => {
  return (
    <div
      className={cx("Authenticationbutton", props.isValidation && "done")}
      onClick={props.isValidation && (() => props.setGetAuth(true))}
    >
>>>>>>> 303696e9bff3eba3a4854d3b6281eeb9861cd24d
      인증코드받기
    </div>
  );
};

Authenticationbutton.propTypes = {
  done: PropTypes.required
};

Authenticationbutton.defaultProps = {
  done: false
};

export default Authenticationbutton;
