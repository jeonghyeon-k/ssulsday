import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./FindPasswordTemplate.scss";
import Authenticationbutton from "../../Authenticationbutton";
<<<<<<< HEAD

=======
import FindPasswordHeader from "../FindPasswordHeader";
>>>>>>> f25040b2071d69a125aec6f6920229b1ed02e1b5
import InputBox from "../../InputBox";

const cx = classNames.bind(styles);

const FindPasswordTemplate = ({ ...props }) => {
  const [isValidation, setIsValidation] = useState(false);
  const [getAuth, setGetAuth] = useState(false);
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
<<<<<<< HEAD
=======
      <FindPasswordHeader
        history={props.history}
        setIsAuth={setIsAuth}
        getAuth={getAuth}
        isAuth={isAuth}
      />
>>>>>>> f25040b2071d69a125aec6f6920229b1ed02e1b5
      <div className={cx("sign-up")}>
        <span className={cx("sign-up__title")}>이메일주소</span>
        <div className={cx("sign-up__input")}>
          <InputBox
            type="email"
            validation={chkEmail}
            isValidation={isValidation}
          />
          {getAuth || (
            <Authenticationbutton
              isValidation={isValidation}
              setGetAuth={setGetAuth}
            />
          )}
        </div>
      </div>
      {getAuth &&
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
            <div className={cx("sign-up")}>
              <span className={cx("sign-up__title")}>인증코드</span>
              <div className={cx("sign-up__input")}>
                <InputBox type="auth" />
              </div>
              <div className={cx("sign-up__return")}>인증코드 다시받기</div>
            </div>
          </>
        ))}
    </>
  );
};

export default FindPasswordTemplate;
