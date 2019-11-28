import React from "react";
import classNames from "classnames/bind";
import styles from "./Authenticationbutton.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Authenticationbutton = ({ ...props }) => {
  return (
    <div
      className={cx("Authenticationbutton", props.isValidation && "done")}
      onClick={props.isValidation && (() => props.setGetAuth(true))}
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
