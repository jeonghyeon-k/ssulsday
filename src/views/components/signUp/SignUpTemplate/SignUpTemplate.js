import React, { useState } from "react";

import Authenticationbutton from "../../Authenticationbutton";
import SignUpHeader from "../SignUpHeader";
import SignUpPrivate from "../SignUpPrivate";
import SignUpAuth from "../SignUpAuth";
import SignUpForm from "../SignUpForm/SignUpForm";

const SignUpTemplate = () => {
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

  //인증번호 관련 유효성 검사
  // const chkAuth = str => {

  // }
  return (
    <>
      <SignUpHeader />
      {isAuth ? (
        //인증번호 인증 후
        <SignUpPrivate validation={chkEmail} />
      ) : (
        //이하 인증번호 인증 전
        <>
          <SignUpForm
            title="이메일주소"
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
        </>
      )}

      {getAuth &&
        (isAuth || (
          //이메일 입력 전
          <SignUpAuth setIsAuth={setIsAuth} />
        ))}
    </>
  );
};

export default SignUpTemplate;
