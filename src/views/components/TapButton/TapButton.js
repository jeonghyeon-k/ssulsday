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
    <div className={cx("tap-btn", props.isToggle && "tap-btn-toggle")}>
      <div className={"tap-btn__text"}>{children}</div>
    </div>
  );
};

TapButton.propTypes = {
  children: PropTypes.string,
  isToggle: PropTypes.bool
};

TapButton.defaultProps = {
  children: "null value",
  isToggle: false
};

export default TapButton;
