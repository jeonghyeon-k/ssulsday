import React from "react";
import styles from "./PostHeader.scss";
import classNames from "classnames/bind";
import Icon from "../../Icon";

const cx = classNames.bind(styles);

const PostHeader = ({ ...props }) => {
  const handleBack = () => {
    props.history.goBack();
  };

  return (
    <div className={cx("header__wrapper", "header__post")}>
      <div className="header__back" onClick={handleBack}>
        <Icon type="arrow" />
      </div>
      <span className={cx("header__title")}>새로운 썰</span>
      <span className={cx("post__finish")} onClick={props.handlePost}>
        완료
      </span>
    </div>
  );
};

export default PostHeader;
