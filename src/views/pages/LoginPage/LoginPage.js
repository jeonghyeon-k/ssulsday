import React, { useState, useEffect } from "react";
import styles from "./LoginPage.module.scss";
import classNames from "classnames/bind";
import Icon from "../../components/Icon/Icon";
import PropTypes from "prop-types";
import Spinner from "../../components/Spinner/Spinner";
import { ApiLogin } from "../../../repository/UserRepository";
import logo from "../../../assets/images/logo.png";

const cx = classNames.bind(styles);

<<<<<<< HEAD
const LoginPage = ({ isCookie }) => {
=======
const LoginPage = (props) => {
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
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
    if (id === "") return LoginPage;
    if (pwd === "") return LoginPage;
<<<<<<< HEAD
      ApiLogin({
        "isCookie": check,
        "user_id": id,
        "user_pwd": pwd
      }).then(data => {
        console.log(data.data.retMsg);
        if(data.data.retMsg==""){
          localStorage.login = true;
         // history.push("")
        }else{

        }
      });
=======
    ApiLogin({
      isCookie: check,
      user_id: id,
      user_pwd: pwd
    }).then(data => {
      if (data.data.retMsg == "OK") {
      localStorage.login = true;
      localStorage.setItem('userid', id);
       window.location.reload();
      } else {
      }
    });
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
  };
  const onSignUp = () => {
    window.location.assign("/signup");
  }

<<<<<<< HEAD
<<<<<<< HEAD
  if (isCookie != null) {
    return <span>자동로그인</span>;
  } else {
    return (
      <div className={cx("loginpage")}>
        <div className={cx("header")}>
          <img className={cx("header__logo")} src={logo} alt='logo' />
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
=======
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
const findpwd=()=>{
  window.location.assign("/find-password");
}


  return (
    <div className={cx("loginpage")}>
      <div className={cx("header")}>
        <img className={cx("header__logo")} src={logo} alt='logo' />
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
<<<<<<< HEAD
>>>>>>> 738cf39... fix. error

          <div className={cx("bottom__Autologin")} onClick={onCheck}>
            <div className={cx("bottom__Autologin__icon")}>
              {check ? (
                <Icon type='check--color' />
              ) : (
                <Icon type='check--color-dimmed' />
              )}
            </div>
            <span className={cx("bottom__Autologin__span")}>자동로그인</span>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
          <a href='/' className={cx("bottom__forgotpassword")}>
            비밀번호 찾기
          </a>
          <button className={cx("bottom__signupbutton")}>회원가입</button>
        </div>
=======
        <a href='/' className={cx("bottom__forgotpassword")}>
=======
        <div onClick={findpwd}className={cx("bottom__forgotpassword")}>
>>>>>>> 738cf39... fix. error
          비밀번호 찾기
        </div>
        <button className={cx("bottom__signupbutton")} onClick={onSignUp}>회원가입</button>
>>>>>>> 6111460... feat.회원가입
      </div>
    );
  }
=======

        <div className={cx("bottom__Autologin")} onClick={onCheck}>
          <div className={cx("bottom__Autologin__icon")}>
            {check ? (
              <Icon type='check--color' />
            ) : (
              <Icon type='check--color-dimmed' />
            )}
          </div>
          <span className={cx("bottom__Autologin__span")}>자동로그인</span>
        </div>

        <div onClick={findpwd}className={cx("bottom__forgotpassword")}>
          비밀번호 찾기
        </div>
        <button className={cx("bottom__signupbutton")} onClick={onSignUp}>회원가입</button>
      </div>
    </div>
  );
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
};

LoginPage.prototype = {
  isCookie: PropTypes.required
};

export default LoginPage;
