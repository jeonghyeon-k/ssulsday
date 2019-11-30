import React from "react";
import styles from "./SignUpHeader.scss";
import classNames from "classnames/bind";
import Icon from "../../Icon";

const cx = classNames.bind(styles);

const SignUpHeader = ({ children, ...props }) => {
  const handleBack = () => {
    props.history.goBack();
  };

  const handleCreateAccount = () => {
    props.handleSignUp();
  };

  const handleNext = () => {
    props.setIsAuth(true);
    props.setIsNext(true);
    props.isNext && handleCreateAccount();
  };

  return (
    <div className={cx("header__wrapper")}>
      <div className="header__back" onClick={handleBack}>
        <Icon type="arrow" />
      </div>
      <span className={cx("header__title")}>{children}</span>
      <span
        className={cx("header__next", props.getAuth && "header__next-isnext")}
        onClick={props.getAuth && handleNext}
      >
        {props.getAuth
          ? props.isNext
            ? "완료"
            : props.rightButton
          : props.rightButton}
      </span>
    </div>
  );
};

export default SignUpHeader;
