import React from "react";
import styles from "./CardView.scss";
import classNames from "classnames/bind";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function CardView({ ...props }) {
  return (
    <div className={cx("card")}>
      <div className={cx("header")}>
        <div className={cx("header__title")}>{props.title}</div>
        <div className={cx("header__hash")}>
          <Icon type='test' />
        </div>
      </div>
      <div className={cx("contents")}>{props.contents} </div>
      <div className={cx("hash")}>{props.hashtags}</div>
      <div className={cx("info")}>
        <Icon type='test' />
        {props.hashtags && (
          <div className={cx("info__place")}>{props.spot}</div>
        )}
        <div className={cx("info__date")}>{props.date}</div>
      </div>
      <div className={cx("bottom")}>
        <div className={cx("bottom__comentcount")}>{props.comentcounte}</div>
        <div className={cx("bottom__commenticon")}> <Icon type='test' /></div>
        <div className={cx("bottom__likeicon")}> <Icon type='test' /></div>
        <div className={cx("bottom__likecount")}>{props.likecount}</div>
        <div className={cx("bottom__viewicon")}> <Icon type='test' /></div>
        <div className={cx("bottom__viewcount")}>{props.viewcount}</div>
      </div>
    </div>
  );
}

CardView.prototype = {
  title: PropTypes.string,
  contents:PropTypes.string,
  spot: PropTypes.string.isRequired,
  hashtags: PropTypes.string,
  date:PropTypes.string,
  comentcounte:PropTypes.string,
  viewcount:PropTypes.string,
  likecount:PropTypes.string
};

CardView.defaultProps = {
  title: "제목 없음",
  contents:"내용 없음",
  spot: "null spot",
  hashtags: "null hashtags",
  date:"0시간 전",
  comentcounte:"0",
  viewcount:"0",
  likecount:"0"
};

export default CardView;
