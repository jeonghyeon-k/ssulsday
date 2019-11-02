import React from "react";
import classNames from "classnames";
import styles from "./Comment.scss";
import PropTypes from "prop-types";

const Comment = ({ icon,Nickname, comment, time ,menu }) => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("comment")}>
      <div className={cx("comment__head")}>
        <div className={cx("comment__head__icon")}>{icon}</div>
        <div className={cx("comment__head__nickname")}>{Nickname}</div>
        <div className={cx("comment__head__time")}>{time}</div>
        <div className={cx("comment__head__menu")}>{menu}</div>
      </div>
      <div className={cx("comment__content")}>{comment}</div>
    </div>
  );
};

Comment.prototype = {
  icon:PropTypes.string,
  menu:PropTypes.string,
  type: PropTypes.string,
  Nickname: PropTypes.string,
  comment: PropTypes.string,
  time: PropTypes.instanceOf
};
Comment.defaultProps = {
  icon:"",
  menu:"",
  Nickname: "Null",
  comment: "Null Comment",
  time: "Null"
};

export default Comment;
