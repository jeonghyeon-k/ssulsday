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
  const handleAuthButton = () => {
    props.isValidation && props.setGetAuth(true);
  };
  return (
    <div
      className={cx("Authenticationbutton", props.isValidation && "done")}
      onClick={handleAuthButton}
    >
>>>>>>> 22ca58d55e2eb09bcbf6da40d39d0a98d9d440c9
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
