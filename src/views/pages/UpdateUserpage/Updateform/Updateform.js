import React, { useState } from "react";
<<<<<<< HEAD
import styles from "./Updateform.scss";
=======
import styles from "./Updateform.module.scss";
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Icon from "../../../components/Icon/Icon";

const cx = classNames.bind(styles);

const SignUpForm = ({ ...props }) => {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
<<<<<<< HEAD
=======
    props.setContent(value);
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
  };
  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleClickRemove = () => {
    setValue("");
  };
  return (
    <div className={cx("updateform")}>
      <span className={cx("update__title")}>{props.title}</span>
      <div className={cx("update__box", value && isFocus && "update__box-focus")}>
        {props.type == "Fix" ? (
          <div
            className={cx("update__box__input")}
            onFocus={handleFocus}
            onChange={handleChange}
            value={value}
            placeholder={props.hoder}
            >
            
            {props.child}
          </div>
        ) : (
          <input
            className={cx("update__box__input")}
            onFocus={handleFocus}
            onChange={handleChange}
            value={value}
            placeholder={props.hoder}
          />
        )}
        {value && isFocus && (
          <div className={cx("update__box__icon")} onClick={handleClickRemove}>
            <Icon type="close"/>
          </div>
        )}
      </div>
    </div>
  );
};

SignUpForm.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  validation: PropTypes.func,
  isValidation: PropTypes.bool
};

SignUpForm.defaultProps = {
  title: "title is null",
  type: "fix",
  child: "test"
};

export default SignUpForm;
