import React, { useState } from "react";
import styles from "./history.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import {
  ApiGetActivityMyContentList,
  ApiGetActivityMyLikeListList,
  ApiGetActivityMyCommentListList,
  ApiGetActivityMyListCount
} from "../../../../repository/ActivityRepository";
import Navbar from "../../../components/Navbar/Navbar";
import CardView from "../../../components/Card/CardView";

const cx = classNames.bind(styles);

const History = ({ ...props }) => {
  const [mycontent, setContent] = useState(false);
  const [mycomment, setComment] = useState(false);
  const [mylike, setlike] = useState(false);
  const [state, setState] = useState(props.type);
  ApiGetActivityMyListCount({
    "searchKeyword" : "redhd0410@gmail.com"
  }
  ).then(data => {
    console.log(data.data.retMsg);
  });
  ApiGetActivityMyContentList({
    "searchKeyword" : "redhd0410@gmail.com"
  }).then(data => {
    console.log(data.data.retMsg);
  });
  ApiGetActivityMyLikeListList({
    "searchKeyword" : "redhd0410@gmail.com"
  }).then(data => {
    console.log(data.data.retMsg);
  });
  ApiGetActivityMyCommentListList({
    "searchKeyword" : "redhd0410@gmail.com"
  }).then(data => {
    console.log(data.data.retMsg);
  });

  const onList = Type => {
    setState(Type);
    console.log(state);
    color(Type);
  };

  const color = (state) => {
    if (state == 1) {
      setContent(true);
      setComment(false);
      setlike(false);
    }
    if (state == 2) {
      setContent(false);
      setComment(true);
      setlike(false);
    }
    if (state == 3) {
      setContent(false);
      setComment(false);
      setlike(true);
    }
  };

  return (
    <div className={cx("template")}>
      <Navbar />
      <div className={cx("box", mycontent && "box-focus")} onClick={() => onList(1)}>
        <div className={cx("box__count", mycontent && "box__count-focus")}>{props.mycontentcount}</div>
        <div className={cx("box__title", mycontent && "box__title-focus")}>작성한 글</div>
      </div>

      <div className={cx("box", mycomment && "box-focus")} onClick={() => onList(2)}>
        <div className={cx("box__count",mycomment && "box__count-focus")}>{props.mycommentcount}</div>
        <div className={cx("box__title",mycomment && "box__title-focus")}>댓글 단 글</div>
      </div>

      <div className={cx("box", mylike && "box-focus")} onClick={() => onList(3)}>
        <div className={cx("box__count", mylike && "box__count-focus")}>{props.mylikecount}</div>
        <div className={cx("box__title", mylike && "box__title-focus")}>좋아한 글</div>
      </div>
      <CardView title={state} />
    </div>
  );
};

History.prototype = {
  type: PropTypes.oneOf(["mycontent", "mycomment", "mylike"])
};
History.defaultProps = {
  type: 1,
  mycontentcount: 0,
  mycommentcount: 0,
  mylikecount: 0
};

export default History;
