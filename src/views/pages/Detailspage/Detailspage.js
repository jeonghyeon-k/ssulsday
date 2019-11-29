import React, {useState} from "react";
import styles from "./Detailspage.scss";
import classNames from "classnames/bind";
import Navbar from "../../components/Navbar/Navbar";
import Ellipse from "../../components/Ellipse/Ellipse";
import Commnet from "../../components/Comment/Comment";
import CommnetCreate from "../../components/CommentCreate/commentCreate";
import PropTypes from "prop-types";
import Icon from "../../components/Icon/Icon";

const cx = classNames.bind(styles);

const Detailspage = ({ ...props }, { commentlist }) => {
  const [like, setLike] = useState(props.islike);
  const onLike = () => {
    setLike(!like);
  };
  return (
    <div className={cx("Template")}>
      <Navbar />
      <Ellipse />
      <div className={cx("pageblock")}>
        <div className={cx("title")}>{props.title}</div>
        <div className={cx("head")}>
          <div className={cx("head__username")}>{props.username}</div>
          <div className={cx("head__date")}>{props.date}</div>
          <div className={cx("head__likeicon")} onClick={onLike}>
          {like ? <Icon type='heart' /> : <Icon type='heart-dimmed' />}
          </div>
          <div className={cx("head__likecount")}>{props.likecount}</div>
          <div className={cx("head__viewicon")}>
            <Icon type='viewer' />
          </div>
          <div className={cx("head__viewcount")}>{props.viewcount}</div>
        </div>
        <hr className={cx("hrbar")} />
        <div className={cx("cardcontent")}>{props.contents}</div>
        <div className={cx("hashtag")}>{props.hashtag}</div>
        <div className={cx("placeicon")}>
          <Icon type='location' />
        </div>
        <div className={cx("spot")}>{props.spot}</div>
        <div className={cx("map")}></div>
        <div className={cx("commentcount")}>{props.commentcount}</div>
        <div className={cx("commenticon")}>
          <Icon type='message' />
        </div>
        <hr className={cx("hrbar")} />
      </div>
        <Commnet/>
      <CommnetCreate />
    </div>
  );
};

Detailspage.prototype = {
  title: PropTypes.string,
  username: PropTypes.string,
  date: PropTypes.string,
  viewcount: PropTypes.string,
  likecount: PropTypes.string,
  contents: PropTypes.string,
  hashtags: PropTypes.string,
  spot: PropTypes.string.isRequired,
  comentcounte: PropTypes.string,
  commentlist:PropTypes.func
};

Detailspage.defaultProps = {
  title: "제목없음",
  username: "익명이",
  date: "0시간",
  viewcount: 0,
  likecount: 0,
  contents: "내용없음",
  hashtags: "",
  spot: "장소없음",
  commentcount: 0,
  commentlist:{}
};

export default Detailspage;
