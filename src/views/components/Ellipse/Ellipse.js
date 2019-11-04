import React from "react";
import styles from "./Ellipse.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Ellipse = ({ children, isToggle }) => {
  // const [isToggle, setIsToggle] = useState(true);
  // const toggle = isToggle => {
  //   return setIsToggle(!isToggle);
  // };
  return (
    <div className={cx("ellipse", isToggle ? "ellipse-toggle" : "")}>
      <div className={cx("ellipse__text")}>{children}</div>
    </div>
  );
};

Ellipse.propTypes = {
  children: PropTypes.string,
  isToggle: PropTypes.bool
};

Ellipse.defaultProps = {
  children: "null value",
  isToggle: false
};

export default Ellipse;
