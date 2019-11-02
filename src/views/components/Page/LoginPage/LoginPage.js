import React from "react";
import styles from "./LoginPage.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";


const cx = classNames.bind(styles);

const LoginPage = ({ autologin_done }) => {
  return (
    <div className={cx("loginpage")}>
      <div className={cx("loginpage__logo")}>
        
      </div>
      <div className={cx("loginpage__input")}>
        <input
          className={cx("loginpage__input__email")}
          placeholder='이메일 주소'
        />
        <input
          className={cx("loginpage__input__password")}
          placeholder='비밀번호'
        />
      </div>
      <button className={cx("loginpage__loginbutton")}>로그인</button>

      <div className={cx("loginpage__Autologin")}>
        <input
          type='checkbox'
          className={cx("loginpage__Autologin__checkbox")}
          id='Checkbox'
          checked={autologin_done}
        />
        <label for='Checkbox'></label>
        <span className={cx("loginpage__Autologin_span")}>자동로그인</span>
      </div>

      <a href='/' className={cx("loginpage__forgotpassword")}>
        비밀번호 찾기
      </a>
      <button className={cx("loginpage__signupbutton")}>회원가입</button>
    </div>
  );
};

LoginPage.prototype = {
  autologin_done: PropTypes.bool
};

export default LoginPage;
