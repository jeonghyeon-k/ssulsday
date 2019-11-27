import React from "react";
import classNames from "classnames/bind";
import styles from "./TapButton.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const TapButton = ({ children, ...props }) => {
  // const [isToggle, setIsToggle] = useState(true);
  // const toggle = isToggle => {
  //   return setIsToggle(!isToggle);
  // };
  return (
    <div
      className={cx("tap-btn", props.isToggle && "tap-btn-toggle")}
      onClick={() => props.setSelected(props.val)}
    >
      <div className={"tap-btn__text"}>{children}</div>
    </div>
  );
};

TapButton.propTypes = {
  children: PropTypes.string,
  isToggle: PropTypes.bool,
  val: PropTypes.string,
  setSelected: PropTypes.func
};

TapButton.defaultProps = {
  children: "null value",
  isToggle: false,
  val: "val is null",
  setSelected: () => {
    console.log("setSelected is null");
  }
};

export default TapButton;
