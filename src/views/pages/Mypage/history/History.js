import React, { useState } from "react";
import styles from "./history.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Navbar from "../../../components/Navbar/Navbar";
import CardView from "../../../components/Card/CardView";

const cx = classNames.bind(styles);

const History = ({ ...props }) => {
  const [mycontent, setContent] = useState(false);
  const [mycomment, setComment] = useState(false);
  const [mylike, setlike] = useState(false);
  
  const [state, setstate] = useState(props.type);
  const [open, setOpen] = useState(true);
  const onList = Type => {
    if (state == Type || state == "") {
      setOpen(!open);
      setstate(Type);
    } else {
      setstate(Type);
    }
  };
  const color = () => {
    if (state == "mycontent") {
      setContent(true);
      setComment(false);
      setlike(false);
    }
    if (state == "mycomment") {
      setContent(false);
      setComment(true);
      setlike(false);
    }
    if (state == "mylike") {
      setContent(false);
      setComment(false);
      setlike(true);
    }
  };

  return (
    <div className={cx("template")}>
      <Navbar />
      <div className={cx("box", mycontent)} onClick={() => onList("mycontent")}>
        <div className={cx("box__count")}>{props.mycontentcount}</div>
        <div className={cx("box__title")}>작성한 글</div>
      </div>

      <div className={cx("box", mycomment)} onClick={() => onList("mycomment")}>
        <div className={cx("box__count")}>{props.mycommentcount}</div>
        <div className={cx("box__title")}>댓글 단 글</div>
      </div>

      <div className={cx("box", mylike)} onClick={() => onList("mylike")}>
        <div className={cx("box__count")}>{props.mylikecount}</div>
        <div className={cx("box__title")}>좋아한 글</div>
      </div>
      <CardView title={state} />
    </div>
  );
};

History.prototype = {
  type: PropTypes.oneOf(["mycontent", "mycomment", "mylike"]),
};
History.defaultProps = {
  type: "mycontent",
  mycontentcount: 0,
  mycommentcount: 0,
  mylikecount: 0
};

export default History;
