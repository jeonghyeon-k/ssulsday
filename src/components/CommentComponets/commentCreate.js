import React from "react";
import classNames from "classnames/bind";
import styles from "./Comment.scss";

function commentCreate() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("create_container")}>
      <input
<<<<<<< HEAD:src/components/CommentComponets/commentCreate.js
        className={cx("create_content")}
        autoFocus
=======
        className={cx("createcommnet__form")}
        autoFocus={true}
>>>>>>> b5bd9fe... no message:src/views/components/CommentCreate/commentCreate.js
        placeholder='댓글을 입력하세요'
      />
    </div>
  );
}

export default commentCreate;
