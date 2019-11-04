import React, { useState, useRef } from "react";
import styles from "./InputBox.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const cx = classNames.bind(styles);

const InputBox = ({ placeholder, type }) => {
  const [isEmail, setIsEmail] = useState(false);
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isCome, setIsCome] = useState(false);
  const inputRef = useRef(null);

  const chkEmail = str => {
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regExp.test(str)) return setIsEmail(true);
    else return setIsEmail(false);
  };

  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
    setIsFocus(true);
  };

  const handleFocus = () => {
    setIsFocus(true);
    setIsCome(true);
  };

  const handleCheck = e => {
    if (e.keyCode === 13 || e.nativeEvent.type === "click") {
      //inputRef.current.focus();
      setIsFocus(false);
      chkEmail(value);
    }
  };

  const handleRemove = () => {
    setValue("");
    inputRef.current.focus();
  };

  return (
    <div className={cx("inputbox")}>
      <div
        className={cx(
          "inputbox__input",
          isFocus ? "inputbox__input-focus" : "",
          isEmail ? "" : isCome ? (isFocus ? "" : "inputbox__input-notemail") : ""
        )}>
        <input
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          onFocus={handleFocus}
          onKeyUp={e => handleCheck(e)}
          ref={inputRef}
        />
        {value === "" ? (
          ""
        ) : (
          <div className={cx("inputbox__removebtn")} onClick={handleRemove}>
            x
          </div>
        )}
        <Icon className={cx("inputbox__icon")} type='test' size='sm' />
      </div>
      {isEmail ? (
        ""
      ) : isCome ? (
        isFocus ? (
          ""
        ) : (
          <div className={cx("inputbox__text")}>이메일 주소 형식이 맞지 않습니다.</div>
        )
      ) : (
        ""
      )}

      <button onClick={handleCheck}>이메일?</button>
    </div>
  );
};

InputBox.propTypes = {
  placeholder: PropTypes.string
};

InputBox.defaultProps = {
  placeholder: "not value"
};

export default InputBox;
