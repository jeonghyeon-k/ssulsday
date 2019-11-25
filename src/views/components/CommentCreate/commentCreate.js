import React from "react";
import classNames from "classnames/bind";
import styles from "./CommentCreate.scss";

function commentCreate() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("createcommnet")}>
      <input
        className={cx("createcommnet__form")}
        autoFocus={true}
        placeholder='댓글을 입력하세요'
      />
      <button className={cx("createcommnet__button")}>등록</button>
    </div>
  );
}

export default commentCreate;
