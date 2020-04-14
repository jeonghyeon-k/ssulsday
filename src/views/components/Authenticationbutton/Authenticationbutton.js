import React from "react";
import classNames from "classnames/bind";
import styles from "./Authenticationbutton.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

<<<<<<< HEAD
<<<<<<< HEAD
const Authenticationbutton = ({ done }) => {
  return (
    <div className={cx("Authenticationbutton", done && "done")}>
      {" "}
=======
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
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
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
      인증코드받기
    </div>
  );
};

Authenticationbutton.propTypes = {
<<<<<<< HEAD
  done: PropTypes.required
=======
  done: PropTypes.bool
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
};

Authenticationbutton.defaultProps = {
  done: false
};

export default Authenticationbutton;
