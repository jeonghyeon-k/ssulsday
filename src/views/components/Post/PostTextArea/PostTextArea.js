import React from "react";
import styles from "./PostTextArea.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PostTextArea = ({ ...props }) => {
  const handleContentChange = e => {
    let { value } = e.target;
    props.setContent(value);
  };
  return (
    <textarea
      className={cx("textarea")}
      placeholder="본문 내용을 입력해주세요."
      onChange={handleContentChange}
    />
  );
};

export default PostTextArea;
