import React from "react";
import classNames from "classnames";
import styles from "./Comment.scss";
import PropTypes from "prop-types";

const Comment = ({ Nickname, comment, time }) => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("comment_container")}>
      <div className={cx("comment_head")}>{Nickname}</div>
      <div className={cx("content_container")}>
        <div className={cx("comment")}>{comment}</div>
      </div>
      <div className={cx("comment_bottom")}>
        <div className={cx("comment_time")}>{time}</div>
        <button className={cx("comment_button")}>답글달기</button>
      </div>
    </div>
  );
};

Comment.prototype = {
  type: PropTypes.string,
  Nickname: PropTypes.string,
  comment: PropTypes.string,
  time: PropTypes.instanceOf()
};
Comment.defaultProps = {
  Nickname: "Null NickName",
  comment: "Null Comment",
  time: "Null"
};

export default Comment;
