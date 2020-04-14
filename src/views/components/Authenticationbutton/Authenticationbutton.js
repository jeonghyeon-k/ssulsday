import React from "react";
import classNames from "classnames/bind";
<<<<<<< HEAD
import styles from "./Authenticationbutton.scss";
=======
import styles from "./Authenticationbutton.module.scss";
>>>>>>> f25040b2071d69a125aec6f6920229b1ed02e1b5
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
>>>>>>> d7e7b2f50f3814acf5340074ad219a8535826ddf
=======
>>>>>>> 303696e9bff3eba3a4854d3b6281eeb9861cd24d
>>>>>>> f25040b2071d69a125aec6f6920229b1ed02e1b5
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
  done: PropTypes.required
>>>>>>> f25040b2071d69a125aec6f6920229b1ed02e1b5
};

Authenticationbutton.defaultProps = {
  done: false
};

export default Authenticationbutton;
