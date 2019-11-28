import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./FindPasswordTemplate.scss";

import InputBox from "../../InputBox";

const cx = classNames.bind(styles);

const FindPasswordTemplate = () => {
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
  return (
    <>
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
      {isValidation &&
        (isAuth ? (
          <>
            <div className={cx("return-text")}>
              <span className={cx("return-text__first")}>
                고객님의 이메일 주소를 통해
              </span>
              <br />
              <span className={cx("return-text__second")}>
                임시 비밀번호가 발급되었습니다.
              </span>
            </div>
          </>
        ) : (
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

export default FindPasswordTemplate;
