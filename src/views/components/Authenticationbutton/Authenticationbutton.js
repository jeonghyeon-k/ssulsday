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
<<<<<<< HEAD
>>>>>>> 22ca58d55e2eb09bcbf6da40d39d0a98d9d440c9
=======
>>>>>>> 303696e9bff3eba3a4854d3b6281eeb9861cd24d
>>>>>>> f25040b2071d69a125aec6f6920229b1ed02e1b5
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
