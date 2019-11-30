import React from "react";
import styles from "./FindPasswordHeader.scss";
import classNames from "classnames/bind";
import Icon from "../../Icon";

const cx = classNames.bind(styles);

const FindPasswordHeader = ({ ...props }) => {
  const handleFindPassword = () => {
    props.setIsAuth(true);
  };
  const handleBack = () => {
    props.history.goBack();
  };
  return (
    <div className={cx("header__wrapper", "header__post")}>
      <div className="header__back" onClick={handleBack}>
        <Icon type="arrow" />
      </div>
      <span className={cx("header__title")}>비밀번호 찾기</span>
      <span
        className={cx("header__next", props.getAuth && "header__next-finish")}
        onClick={props.getAuth && handleFindPassword}
      >
        완료
      </span>
    </div>
  );
};

export default FindPasswordHeader;
