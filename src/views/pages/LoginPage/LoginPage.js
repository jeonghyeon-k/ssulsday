import React, { useState } from "react";
import styles from "./LoginPage.scss";
import classNames from "classnames/bind";
import Icon from "../../components/Icon/Icon";
import PropTypes from "prop-types";
import Spinner from "../../components/Spinner/Spinner";
import { ApiLogin } from "../../../repository/UserRepository";

const cx = classNames.bind(styles);

const LoginPage = ({ isCookie }) => {
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [inputs, setInputs] = useState({
    id: "",
    pwd: ""
  });

  const { id, pwd } = inputs;
  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, 
      [name]: value
    });
  };
  const onReset = () => {
    setInputs({
      id: "",
      pwd: ""
    });
  };
  const onCheck = () => {
    setCheck(!check);
  };
  const onClick = () => {
    if(id == "") return LoginPage;
    if(pwd == "") return LoginPage;
    setLoading(!loading);
    const response = ApiLogin({
      "cookie": false,
      "isUseCookie": false,
      "user_id": "string",
      "user_pwd": "string"
    });
    console.log(response);
    setLoading(!loading);
  };

  if (loading) return <Spinner />;
  if (isCookie != null) {
    return <span>자동로그인</span>;
  } else {
    return (
      <div className={cx("loginpage")}>
        <div className={cx("header")}>
          <div className={cx("header__logo")}></div>
        </div>
        <div className={cx("input")}>
          <input
            className={cx("input__email")}
            name='id'
            placeholder='이메일 주소'
            onChange={onChange}
            value={id}
          />
          <input
            className={cx("input__password")}
            name='pwd'
            placeholder='비밀번호'
            type='password'
            onChange={onChange}
            value={pwd}
          />
        </div>
        <div className={cx("bottom")}>
          <button className={cx("bottom__loginbutton")} onClick={onClick}>
            로그인
          </button>

          <div className={cx("bottom__Autologin")} onClick={onCheck}>
            {check ? (
              <Icon type='check--color' />
            ) : (
              <Icon type='check--color-dimmed' />
            )}
            <span className={cx("bottom__Autologin_span")}>자동로그인</span>
          </div>

          <a href='/' className={cx("bottom__forgotpassword")}>
            비밀번호 찾기
          </a>
          <button className={cx("bottom__signupbutton")}>회원가입</button>
        </div>
      </div>
    );
  }
};

LoginPage.prototype = {
  isCookie: PropTypes.required
};

export default LoginPage;
