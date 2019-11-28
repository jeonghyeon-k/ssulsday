import React from "react";
import classNames from "classnames";
import styles from "./Comment.scss";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";

const Comment = ({ Nickname, comment, time}) => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("comment")}>
      <div className={cx("head")}>
        <div className={cx("head__icon")}><Icon type="test"/></div>
        <div className={cx("head__nickname")}>{Nickname}</div>
        <div className={cx("head__time")}>{time}</div>
        <div className={cx("head__menu")}><Icon type="test"/></div>
      </div>
      <div className={cx("content")}>{comment}</div>
    </div>
  );
};

Comment.prototype = {
  type: PropTypes.string,
  Nickname: PropTypes.string,
  comment: PropTypes.string,
  time: PropTypes.string
};
Comment.defaultProps = {
  Nickname: "익명이",
  comment: "내용없음",
  time: "0시간전"
};

export default Comment;
