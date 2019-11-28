import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SignUpTemplate.scss";

import SignUpHeader from "../SignUpHeader";
import InputBox from "../../InputBox";

const cx = classNames.bind(styles);

const SignUpTemplate = () => {
  const [isValidation, setIsValidation] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const chkEmail = str => {
    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regExp.test(str)) {
      return setIsValidation(true);
    } else {
      return setIsValidation(false);
    }
  };

  //인증번호 관련 유효성 검사
  // const chkAuth = str => {

  // }
  return (
    <>
      <SignUpHeader />
      {isAuth ? (
        //인증번호 인증 후
        <>
          <div className={cx("sign-up-form")}>
            <span className={cx("sign-up-form__title")}>닉네임</span>
            <div className={cx("sign-up-form__input")}>
              <InputBox type="nickname" />
            </div>
          </div>
          <div className={cx("sign-up-form")}>
            <span className={cx("sign-up-form__title")}>비밀번호</span>
            <div className={cx("sign-up-form__input")}>
              <InputBox type="password" />
            </div>
          </div>
          <div className={cx("sign-up-form")}>
            <span className={cx("sign-up-form__title")}>비밀번호 재확인</span>
            <div className={cx("sign-up-form__input")}>
              <InputBox type="check-password" validation={chkEmail} />
            </div>
          </div>
        </>
      ) : (
        //이하 인증번호 인증 전
        <div className={cx("sign-up-form")}>
          <span className={cx("sign-up-form__title")}>이메일주소</span>
          <div className={cx("sign-up-form__input")}>
            <InputBox
              type="email"
              validation={chkEmail}
              isValidation={isValidation}
            />
          </div>
        </div>
      )}

      {isValidation &&
        (isAuth || (
          //이메일 입력 전
          <>
            <div className={cx("sign-up-form")}>
              <span className={cx("sign-up-form__title")}>인증코드</span>
              <div className={cx("sign-up-form__input")}>
                <InputBox type="auth" />
              </div>
              <div className={cx("sign-up-form__return-text")}>
                인증코드 다시받기
              </div>
            </div>
            <button
              onClick={() => {
                setIsAuth(true);
              }}
            >
              다음
            </button>
          </>
        ))}
    </>
  );
};

export default SignUpTemplate;
