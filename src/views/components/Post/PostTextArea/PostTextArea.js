import React from "react";
import styles from "./PostTextArea.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PostTextArea = () => {
  return (
    <textarea
      className={cx("textarea")}
      placeholder="본문 내용을 입력해주세요."
    />
  );
};

export default PostTextArea;
