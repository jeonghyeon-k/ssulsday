import React, { useState } from "react";
import styles from "./CardView.module.scss";
import classNames from "classnames/bind";


const cx = classNames.bind(styles);

export default function PostModal({ ...props }) {

  return (
      <div className={cx("modal")}>
          <div className={cx("")}></div>
          <div className={cx("")}></div>
          <div className={cx("")}></div>
          <div className={cx("")}></div>
          <div className={cx("")}></div>
          <div className={cx("")}></div>
      </div>
  
  );
}

PostModal.prototype = {

};

PostModal.defaultProps = {

};
