import React from "react";
import styles from "./PostModalHeader.scss";
import classNames from "classnames/bind";
import Icon from "../../Icon";

const cx = classNames.bind(styles);

const PostModalHeader = ({ children, ...props }) => {
  const handleBack = () => {
    props.setIsTagModal && props.setIsTagModal(false);
    props.setIsPlaceModal && props.setIsPlaceModal(false);
  };
  return (
    <div className={cx("header__wrapper", "header__post")}>
      <div className="header__back" onClick={handleBack}>
        <Icon type="arrow" />
      </div>
      <span className={cx("header__title")}>{children}</span>
      <span className={cx("post__finish")}>완료</span>
    </div>
  );
};

export default PostModalHeader;
