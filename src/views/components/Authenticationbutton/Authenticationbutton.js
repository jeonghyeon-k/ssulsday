import React from "react";
import classNames from "classnames/bind";
import styles from "./Authenticationbutton.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);



const Authenticationbutton = ({done}) => {
  
  return (
      <div className={cx("Authenticationbutton",done&&"done")}  > 인증코드받기</div>
  );
};

Authenticationbutton.propTypes = {
  done: PropTypes.bool
};

Authenticationbutton.defaultProps = {
  done: false
};

export default Authenticationbutton;
