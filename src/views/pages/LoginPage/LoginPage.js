import React from "react";
import styles from "./LoginPage.scss";
import classNames from "classnames/bind";
import Icon from "../../components/Icon/Icon";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const LoginPage = ({ isCookie }) => {
  return (
    <div className={cx("loginpage")}>
      <div className={cx("header")}>
        <div className={cx("header__logo")}></div>
      </div>
      <div className={cx("input")}>
        <input className={cx("input__email")} placeholder='이메일 주소' />
        <input className={cx("input__password")} placeholder='비밀번호' />
      </div>
      <div className={cx("bottom")}>
        <button className={cx("bottom__loginbutton")}>로그인</button>

        <div className={cx("bottom__Autologin")}>
          <Icon type="test"/>
          <span className={cx("bottom__Autologin_span")}>자동로그인</span>
        </div>

        <a href='/' className={cx("bottom__forgotpassword")}>
          비밀번호 찾기
        </a>
        <button className={cx("bottom__signupbutton")}>회원가입</button>
      </div>
    </div>
  );
};

LoginPage.prototype = {
  isCookie: PropTypes.required
}

export default LoginPage;
