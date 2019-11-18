import React, { useState, useRef, useEffect } from "react";
import styles from "./InputBox.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const cx = classNames.bind(styles);

const InputBox = ({ ...props }) => {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isCome, setIsCome] = useState(false);
  const [caution, setCaution] = useState("caution");
  const [placeholder, setPlaceholder] = useState("placeholder");
  const [isNormal, setIsNormal] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.type === "email") {
      setCaution("이메일주소 형식이 맞지 않습니다.");
      setPlaceholder("이메일주소를 입력해주세요.");
    } else if (props.type === "auth") {
      setCaution("인증번호가 잘못 입력되었습니다.");
      setPlaceholder("인증번호를 입력해주세요.");
    } else if (props.type === "nickname") {
      setCaution("");
      setPlaceholder("닉네임을 입력해주세요.");
      setIsNormal(true);
    } else if (props.type === "check-password") {
      setCaution("비밀번호가 일치하지 않습니다.");
      setPlaceholder("비밀번호를 다시 입력해주세요.");
    } else {
      setCaution("");
      setPlaceholder("비밀번호를 입력해주세요.");
      setIsNormal(true);
    }
  });

  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
    setIsFocus(true);
  };

  const handleFocus = () => {
    setIsFocus(true);
    setIsCome(true);
  };

  const handleEmailCheck = e => {
    if (e.keyCode === 13 || e.nativeEvent.type === "click") {
      //inputRef.current.focus();
      setIsFocus(false);
      if (props.type !== "nickname" || props.type !== "password") {
        props.validation(value);
      }
    }
  };

  const handleClickRemove = () => {
    setValue("");
    inputRef.current.focus();
  };

  return (
    <div className={cx("inputbox")}>
      <div
        className={cx(
          "input-box__wrapper",
          isFocus && "input-box__wrapper-focus",
          isCome &&
            (props.isValidation ||
              isFocus ||
              isNormal ||
              "input-box__wrapper-notemail")
        )}
      >
        <input
          className={cx("input-box__input")}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          onFocus={handleFocus}
          onKeyUp={e => handleEmailCheck(e)}
          ref={inputRef}
        />
        {value &&
          isFocus &&
          (props.isValidation || (
            <div
              className={cx("input-box__remove-btn")}
              onClick={handleClickRemove}
            >
              x
            </div>
          ))}
        <Icon className={cx("input-box__icon")} type="test" size="sm" />
      </div>
      {isCome &&
        (props.isValidation || isFocus || isNormal || (
          <span className={cx("input-box__text")}>{caution}</span>
        ))}
    </div>
  );
};

InputBox.propTypes = {
  //인풋박스 타입
  type: PropTypes.oneOf([
    "email",
    "auth",
    "nickname",
    "password",
    "check-password"
  ]).isRequired,
  //유효성 검사 함수
  validation: PropTypes.func,
  //유효성 검사 확인 변수
  isValidation: PropTypes.bool
};

InputBox.defaultProps = {
  type: "email",
  validation: () => {
    console.log("props validation is null");
  },
  isValidation: false
};

export default InputBox;
