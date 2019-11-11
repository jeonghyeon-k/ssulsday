import React from "react";
import styles from "./Ellipse.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Ellipse = ({ children, ...props }) => {
  // const [isToggle, setIsToggle] = useState(true);
  // const toggle = isToggle => {
  //   return setIsToggle(!isToggle);
  // };
  return (
    <div className={cx("ellipse", props.isToggle && "ellipse-toggle")}>
      <span className={cx("ellipse__text")}>{children}</span>
    </div>
  );
};

Ellipse.propTypes = {
  children: PropTypes.string.isRequired,
  isToggle: PropTypes.bool
};

Ellipse.defaultProps = {
  children: "null value",
  isToggle: false
};

export default Ellipse;
