import React from "react";
import styles from "./Help.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Help = () => {
  return (
  <div className={cx("block")}>
    도움말
  </div>
  );
};

Help.prototype = {

}
Help.defaultProps={

}

export default Help;
