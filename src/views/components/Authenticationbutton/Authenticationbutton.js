import React from "react";
import classNames from "classnames/bind";
import styles from "./Authenticationbutton.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Authenticationbutton = ({ ...props }) => {
  const handleAuthButton = () => {
    props.isValidation && props.setGetAuth(true);
    props.ApiEmailAuth({ email: props.userid });
  };
  return (
    <div
      className={cx("Authenticationbutton", props.isValidation && "done")}
      onClick={handleAuthButton}
    >
      인증코드받기
    </div>
  );
};

Authenticationbutton.propTypes = {
  done: PropTypes.bool
};

Authenticationbutton.defaultProps = {
  done: false
};

export default Authenticationbutton;
