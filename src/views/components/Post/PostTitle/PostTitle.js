import React from "react";
import styles from "./PostTitle.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PostTitle = ({ ...props }) => {
  const handleTitleChange = e => {
    let { value } = e.target;
    props.setTitle(value);
  };
  return (
    <input
      className={cx("post__title")}
      placeholder="제목"
      onChange={handleTitleChange}
    />
  );
};

export default PostTitle;
