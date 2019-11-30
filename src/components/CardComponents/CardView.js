import React from "react";
<<<<<<< HEAD:src/components/CardComponents/CardView.js
import {
  MdFavorite,
  MdFavoriteBorder,
  MdVisibility,
  MdSms
} from "react-icons/md";
import styles from "./Card.scss";
=======

import styles from "./CardView.scss";
>>>>>>> b5bd9fe... no message:src/views/components/Card/CardView.js
import classNames from "classnames/bind";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";
<<<<<<< HEAD
<<<<<<< HEAD
const cx = classNames.bind(styles);

function CardView({
  type,
  done,
  title,
  commentCount,
  Hashtag,
  carddate,
  Viewcount,
  Likecount,
  Contents
}) {


=======
import {ApiPostLike} from "../../../repository/LikeRepository"
=======
import { ApiPostLike } from "../../../repository/LikeRepository";
>>>>>>> e2f8617... master/fix

const cx = classNames.bind(styles);
let id = localStorage.getItem("userid");
function CardView({ ...props }) {
  const [like, setLike] = useState(props.islike);
  const onLike = () => {
    ApiPostLike({
      user_id: id,
      post_id: props.post_id
    }).then(data => {
      if (data.data.retMsg == "OK") {
        localStorage.login = true;
        localStorage.setItem("userid", id);
        window.location.reload();
      } else {
      }
    });
    setLike(!like);
  };
  let now = new Date();
  let old = new Date(props.date);
  let gap = now.getTime() - old.getTime();
  let sec_gap = gap / 10000000;
<<<<<<< HEAD
  let set_gap=Math.floor(sec_gap);
  console.log(props.hashtags);
>>>>>>> d1f958d... feate. 좋아요 api 추가
  return (
    <div className={cx("card_container")}>
      <div className={cx("card_head")}>
        <div className={cx("card_title")}>{title}</div>
        <div className={cx("card_commentcount")}>{commentCount}</div>
        <button className={cx("card_commentbutton")}>
          <Icon type="test"/>
        </button>
=======
  let set_gap = Math.floor(sec_gap);
  console.log(set_gap);
  return (
    <div className={cx("card")}>
      <div className={cx("header")}>
        <div className={cx("header__title")}>{props.title}</div>
        <Ellipse>{props.category_id}</Ellipse>
      </div>
      <div className={cx("contents")}>{props.contents} </div>
      {props.hashtags && <div className={cx("hash")}>{props.hashtags}</div>}
      <div className={cx("info")}>
        <Icon type="location" size="xsm" />

        <div className={cx("info__place")}>{props.spot}</div>

        <div className={cx("info__date")}>{set_gap}시간전</div>
>>>>>>> e2f8617... master/fix
      </div>
<<<<<<< HEAD
      {type ? false : <div className={cx("card_content")}>{Contents}</div>}

      <div className={cx("card_hashtag", type)}>{Hashtag}</div>

      <div className={cx("card_bottom", type)}>
        {type ? <hr className={cx("hr")} /> : false}
        <div className={cx("card_date")}>{carddate}</div>
        <div className={cx("card_bottom_box")}>
          <div className={cx("card_conut")}>{Viewcount}</div>
          <div className={cx("card_button")}>
            <Icon type="test" />
          </div>
          <div className={cx("card_conut")}>{Likecount}</div>
          <button className={cx("card_button")}>
            {done ? <Icon type="test"  /> : <Icon />}
          </button>
=======
      <div className={cx("bottom")}>
        <div className={cx("bottom__comentcount")}>{props.comentcounte}</div>
        <div className={cx("bottom__commenticon")}>
          <Icon type="message" />
        </div>
        <div className={cx("bottom__likeicon")} onClick={onLike}>
          {like ? <Icon type="heart" /> : <Icon type="heart-dimmed" />}
        </div>
        <div className={cx("bottom__likecount")}>{props.likecount}</div>
        <div className={cx("bottom__viewicon")}>
<<<<<<< HEAD
          <Icon type='viewer' />
>>>>>>> e907aec... style. assets에 로그인 로고 추가 docs. 마이페이지
=======
          <Icon type="viewer" />
>>>>>>> e2f8617... master/fix
        </div>
      </div>
    </div>
  );
}

CardView.prototype = {
  type: PropTypes.string,
  done: PropTypes.bool,
  title: PropTypes.string,
  Hashtag: PropTypes.string,
  carddate: PropTypes.instanceOf(),
  Contents: PropTypes.string,
  Viewcount: PropTypes.number,
  Likecount: PropTypes.number,
  commentCount: PropTypes.number
};

CardView.defaultProps = {
  type: "",
  done: false,
  title: "제목 없음",
<<<<<<< HEAD
  carddate: "00시간 전",
  Contents: "내용 없음",
  Viewcount: 0,
  Likecount: 0,
  commentCount: 0
=======
  contents: "내용 없음",
  spot: "강남역",
  hashtags: "null hashtags",
  date: "0시간 전",
  comentcounte: "0",
  viewcount: "0",
  likecount: "0",
  ellipse: "고백썰",
  islike: false
>>>>>>> e907aec... style. assets에 로그인 로고 추가 docs. 마이페이지
};

export default CardView;
