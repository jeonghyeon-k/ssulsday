import React from "react";
import styles from "./Hash.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Hash = ({ children }) => {
  return (
    <div className={cx("hash")}>
      <span className={cx("hash__text")}>#{children}</span>
    </div>
  );
};

Hash.propTypes = {
  children: PropTypes.string.isRequired
};

Hash.defaultProps = {
  children: "null hash"
};

export default Hash;
