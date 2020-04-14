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
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
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
