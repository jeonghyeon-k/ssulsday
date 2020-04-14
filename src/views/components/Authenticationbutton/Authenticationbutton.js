import React from "react";
import classNames from "classnames/bind";
<<<<<<< HEAD
import styles from "./Authenticationbutton.scss";
=======
import styles from "./Authenticationbutton.module.scss";
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
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
>>>>>>> d7e7b2f50f3814acf5340074ad219a8535826ddf
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
      인증코드받기
    </div>
  );
};

Authenticationbutton.propTypes = {
<<<<<<< HEAD
<<<<<<< HEAD
  done: PropTypes.required
=======
  done: PropTypes.bool
>>>>>>> d7e7b2f50f3814acf5340074ad219a8535826ddf
=======
  done: PropTypes.bool
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
};

Authenticationbutton.defaultProps = {
  done: false
};

export default Authenticationbutton;
