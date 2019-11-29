import React from "react";
import styles from "./question.module.scss";
import classNames from "classnames/bind";
import Navbar from "../../../components/Navbar/Navbar";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const question = () => {
  return (
  <div className={cx("templete")}>
    <Navbar/>
    <input className={cx("question__title")} placeholder="제목"/>
    <hr className={cx("question__hr")}/>
    <textarea className={cx("question__content")} placeholder="내용을 작성해주세요." />
   <Navbar/>
  </div>
  );
};

question.prototype = {

}
question.defaultProps={

}

export default question;
