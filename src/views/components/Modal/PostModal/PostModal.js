import React, { useState } from "react";
import styles from "./PostModal.module.scss";
import classNames from "classnames/bind";


const cx = classNames.bind(styles);

export default function PostModal({ ...props }) {

  return (
      <div className={cx("modal")}>
          <div className={cx("modal__edit")}>수정</div>
          <hr className={cx("modal__hr")}/>
          <div className={cx("modal__delete")}>삭제</div>
          <div className={cx("modal__cancel")}>취소</div>
      </div>
  );
}

PostModal.prototype = {

};

PostModal.defaultProps = {

};
