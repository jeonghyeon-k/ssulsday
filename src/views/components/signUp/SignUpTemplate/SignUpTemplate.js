import React, { useState } from "react";

import Authenticationbutton from "../../Authenticationbutton";
import SignUpHeader from "../SignUpHeader";
import SignUpPrivate from "../SignUpPrivate";
import SignUpAuth from "../SignUpAuth";
import SignUpForm from "../SignUpForm/SignUpForm";

import { ApiPostUser } from "../../../../repository/UserRepository";

const SignUpTemplate = ({ ...props }) => {
  const [isValidation, setIsValidation] = useState(false);
  const [getAuth, setGetAuth] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isNext, setIsNext] = useState(false);

  const [username, setUsername] = useState("");
  const [userid, setUserid] = useState("");
  const [userpwd, setUserpwd] = useState("");

  const handleSignUp = () => {
    const userinfo = {
      authkey: null,
      is_active: 0,
      user_id: userid,
      username: username,
      user_pwd: userpwd,
      user_new_pwd: null
    };
    ApiPostUser(userinfo).then(data => {
      props.history.goBack();
    });
  };
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
      <SignUpHeader
        history={props.history}
        isNext={isNext}
        setIsNext={setIsNext}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        rightButton="다음"
        getAuth={getAuth}
        handleSignUp={handleSignUp}
      >
        회원가입
      </SignUpHeader>
      {isAuth ? (
        //인증번호 인증 후
        <SignUpPrivate
          validation={chkEmail}
          setUsername={setUsername}
          setUserpwd={setUserpwd}
        />
      ) : (
        //이하 인증번호 인증 전
        <>
          <SignUpForm
            title="이메일주소"
            type="email"
            validation={chkEmail}
            isValidation={isValidation}
            handleChange={setUserid}
          />
          {getAuth || (
            <Authenticationbutton
              isValidation={isValidation}
              setGetAuth={setGetAuth}
              userid={userid}
            />
          )}
        </>
      )}

      {getAuth &&
        (isAuth || (
          //이메일 입력 전
          <SignUpAuth />
        ))}
    </>
  );
};

export default SignUpTemplate;
