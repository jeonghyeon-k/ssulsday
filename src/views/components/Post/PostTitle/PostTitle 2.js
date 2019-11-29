import React from "react";
import styles from "./PostTitle.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PostTitle = () => {
  return <input className={cx("post__title")} placeholder="제목" />;
};

export default PostTitle;
