import React from "react";
import classNames from "classnames/bind";
import styles from "./Comment.scss";

function commentCreate() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("create_container")}>
      <input
        className={cx("create_content")}
        autoFocus
        placeholder='댓글을 입력하세요'
      />
    </div>
  );
}

export default commentCreate;
