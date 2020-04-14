import React from "react";
import styles from "./item.scss";
import classNames from "classnames/bind";
import Icon from "../../../components/Icon/Icon";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const item = ({title, type }) => {
  return (
  <div className={cx("block")}>
    <div className={cx("block__title")}>{title}</div>
<<<<<<< HEAD
    <div className={cx("block__icon")}><Icon type={type}/></div>
=======
    <div className={cx("block__icon")}><Icon type='arrow-small-right'/></div>
>>>>>>> f25040b2071d69a125aec6f6920229b1ed02e1b5
  </div>
  );
};

item.prototype = {
  title: PropTypes.string,
  type: PropTypes.string
}
item.defaultProps={
  title: "빈칸",
  type: "test"
}

export default item;
