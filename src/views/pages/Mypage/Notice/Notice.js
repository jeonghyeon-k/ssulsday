import React from "react";
import styles from "./Notice.scss";
import classNames from "classnames/bind";
import Item from "../item/item";
import Navbar from "../../../components/Navbar/Navbar";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Notice = () => {
  return (
  <div className={cx("templete")}>
    <Navbar/>
   <Item title="공지사항입니다."/>
   <Navbar/>
  </div>
  );
};

Notice.prototype = {
  title: PropTypes.string,
  type: PropTypes.string
}
Notice.defaultProps={
  title: "빈칸",
  type: "test"
}

export default Notice;
