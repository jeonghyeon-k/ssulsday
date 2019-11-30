<<<<<<< HEAD:src/components/CardComponents/CardView.js
import React from "react";
<<<<<<< HEAD:src/components/CardComponents/CardView.js
<<<<<<< HEAD:src/components/CardComponents/CardView.js
import {
  MdFavorite,
  MdFavoriteBorder,
  MdVisibility,
  MdSms
} from "react-icons/md";
import styles from "./Card.scss";
=======

=======
>>>>>>> 3cb7984... style. 사이즈 px 변경, 색상 변경 docs. 최종으로 변경된 디자인으로 수정:src/views/components/Card/CardView.js
=======
import React, { useState } from "react";
<<<<<<< HEAD:src/components/CardComponents/CardView.js
>>>>>>> e8e4316... feat. mypage style. 아이콘 추가:src/views/components/Card/CardView.js
import styles from "./CardView.scss";
>>>>>>> b5bd9fe... no message:src/views/components/Card/CardView.js
=======
import styles from "./CardView.module.scss";
>>>>>>> 4c8ca83... feat. 상세페이지 라우터설정:src/views/components/Card/CardView.js
import classNames from "classnames/bind";
import Icon from "../Icon/Icon";
import Ellipse from "../Ellipse/Ellipse";
import PropTypes from "prop-types";
import {ApiPostLike} from "../../../repository/LikeRepository"

const cx = classNames.bind(styles);
let id = localStorage.getItem('userid');
function CardView({ ...props }) {
  const [like, setLike] = useState(props.islike);
  const onLike = () => {
    ApiPostLike({
      user_id: id,
      post_id: props.post_id
    }).then(data => {
      if (data.data.retMsg == "OK") {
      localStorage.login = true;
      localStorage.setItem('userid', id);
       window.location.reload();
      } else {
      }
    });
    setLike(!like);
    
  };
  let now = new Date();
  let old = new Date(props.date);
  let gap = now.getTime()-old.getTime();
  let sec_gap = gap / 10000000;
  let set_gap=Math.floor(sec_gap);
  console.log(props.hashtags);
  return (
    <div className={cx("card")}>
      <div className={cx("header")}>
        <div className={cx("header__title")}>{props.title}</div>
        <div className={cx("header__hash")}>
          <Ellipse>{props.category_id}</Ellipse>
        </div>
      </div>
      <div className={cx("contents")}>{props.contents} </div>
      {props.hashtags && (
      <div className={cx("hash")}>{props.hashtags}</div>
      )}
      <div className={cx("info")}>
        <Icon type='location' size='xsm' />
       
          <div className={cx("info__place")}>{props.spot}</div>
        
        <div className={cx("info__date")}>{set_gap}시간전</div>
      </div>
      <div className={cx("bottom")}>
        <div className={cx("bottom__comentcount")}>{props.comentcounte}</div>
        <div className={cx("bottom__commenticon")}>
          <Icon type='message' />
        </div>
        <div className={cx("bottom__likeicon")} onClick={onLike}>
          {like ? <Icon type='heart' /> : <Icon type='heart-dimmed' />}
        </div>
        <div className={cx("bottom__likecount")}>{props.likecount}</div>
        <div className={cx("bottom__viewicon")}>
          <Icon type='viewer' />
        </div>
        <div className={cx("bottom__viewcount")}>{props.viewcount}</div>
      </div>
    </div>
  );
}

CardView.prototype = {
  title: PropTypes.string,
  contents: PropTypes.string,
  spot: PropTypes.string.isRequired,
  hashtags: PropTypes.string,
  date: PropTypes.string,
  comentcounte: PropTypes.string,
  viewcount: PropTypes.string,
  likecount: PropTypes.string,
  ellipse: PropTypes.string,
  islike: PropTypes.isRequired
};

CardView.defaultProps = {
  title: "제목 없음",
  contents: "내용 없음",
  spot: "강남역",
  date: "0시간 전",
  comentcounte: "0",
  viewcount: "0",
  likecount: "0",
  ellipse: "고백썰",
  islike: false
};

export default CardView;
