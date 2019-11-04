import React from "react";
import styles from "./Hash.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Hash = ({ children }) => {
  return (
    <div className={cx("hash")}>
      <div className={cx("hash__text")}>#{children}</div>
    </div>
  );
};

Hash.propTypes = {
  children: PropTypes.string
};

Hash.defaultProps = {
  children: "null"
};

export default Hash;
