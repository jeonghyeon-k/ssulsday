import React, { useState, useRef } from "react";
import styles from "./InputBox.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const cx = classNames.bind(styles);

const InputBox = ({ ...props }) => {
  const [isEmail, setIsEmail] = useState(false);
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isCome, setIsCome] = useState(false);
  const inputRef = useRef(null);

  const chkEmail = str => {
    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regExp.test(str)) {
      return setIsEmail(true);
    } else {
      return setIsEmail(false);
    }
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

  const handleEmailCheck = e => {
    if (e.keyCode === 13 || e.nativeEvent.type === "click") {
      //inputRef.current.focus();
      setIsFocus(false);
      chkEmail(value);
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
          "input-box__input",
          isFocus && "input-box__input-focus",
          isCome && (isEmail || isFocus || "input-box__input-notemail")
        )}>
        <input
          placeholder={props.placeholder}
          onChange={handleChange}
          value={value}
          onFocus={handleFocus}
          onKeyUp={e => handleEmailCheck(e)}
          ref={inputRef}
        />
        {value && (
          <div className={cx("input-box__remove-btn")} onClick={handleClickRemove}>
            x
          </div>
        )}
        <Icon className={cx("input-box__icon")} type='test' size='sm' />
      </div>
      {isCome &&
        (isEmail || isFocus || (
          <span className={cx("input-box__text")}>이메일 주소 형식이 맞지 않습니다.</span>
        ))}

      <button onClick={handleEmailCheck}>이메일?</button>
    </div>
  );
};

InputBox.propTypes = {
  placeholder: PropTypes.string
};

InputBox.defaultProps = {
  placeholder: "null placeholder"
};

export default InputBox;
