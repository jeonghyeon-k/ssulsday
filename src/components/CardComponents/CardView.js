<<<<<<< HEAD:src/components/CardComponents/CardView.js
import React from "react";
<<<<<<< HEAD:src/components/CardComponents/CardView.js
<<<<<<< HEAD
=======
<<<<<<< HEAD:src/components/CardComponents/CardView.js
>>>>>>> 0dc6a91f2b4c9402774476c37cfb10ffbd2e5ad7
import {
  MdFavorite,
  MdFavoriteBorder,
  MdVisibility,
  MdSms
} from "react-icons/md";
import styles from "./Card.scss";
=======

<<<<<<< HEAD
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
  const[likecount, setCount] = useState(props.likecount);
  const onLike = () => {
    if(!likecount){
      let getcount = Number(likecount)+1;
      setCount(getcount);
      setLike(!like);
    }else{ 
      let getcount = Number(likecount)-1;
      setCount(likecount);
      setLike(!like);
    }
    setLike(like)
    ApiPostLike({
      "user_id": id,
      "post_id": props.post_id
    }).then(data => {
     console.log(data.data)
    });
    setLike(!like);
  };
<<<<<<< HEAD
  let now = new Date();
  let old = new Date(props.date);
  let gap = now.getTime() - old.getTime();
=======

  let now = new Date("YYYY/MM/DD");
  let old = new Date(props.date.replace("-","/"));
  let gap = now.getTime()-old.getTime();
>>>>>>> 8948c3df38bcebd81ef30c185a7b5d3bbb4f0082
  let sec_gap = gap / 10000000;
<<<<<<< HEAD
  let set_gap=Math.floor(sec_gap);
  console.log(props.hashtags);
>>>>>>> d1f958d... feate. 좋아요 api 추가
  return (
<<<<<<< HEAD
    <div className={cx("card_container")}>
      <div className={cx("card_head")}>
        <div className={cx("card_title")}>{title}</div>
        <div className={cx("card_commentcount")}>{commentCount}</div>
        <button className={cx("card_commentbutton")}>
          <Icon type="test"/>
        </button>
=======
<<<<<<< HEAD
  let set_gap = Math.floor(sec_gap);
  console.log(set_gap);
  return (
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
import { ApiPostLike } from "../../../repository/LikeRepository";

const cx = classNames.bind(styles);
let id = localStorage.getItem("userid");
function CardView({ ...props }) {
  const [like, setLike] = useState(props.islike);
  const[likecount, setCount] = useState(props.likecount);
  const onLike = () => {
    if(!likecount){
      let getcount = Number(likecount)+1;
      setCount(getcount);
      setLike(!like);
    }else{ 
      let getcount = Number(likecount)-1;
      setCount(likecount);
      setLike(!like);
    }
    setLike(like)
    ApiPostLike({
      "user_id": id,
      "post_id": props.post_id
    }).then(data => {
     console.log(data.data)
    });
    setLike(!like);
  };
<<<<<<< HEAD
  let now = new Date();
  let old = new Date(props.date);
  let gap = now.getTime() - old.getTime();
=======

  let now = new Date("YYYY/MM/DD");
  let old = new Date(props.date.replace("-","/"));
  let gap = now.getTime()-old.getTime();
>>>>>>> 70aaeb3c7696578a7b73856cf49739ec4d8dcb8e
  let sec_gap = gap / 10000000;
  let set_gap = Math.floor(sec_gap);
  console.log(set_gap);
  return (
>>>>>>> 0dc6a91f2b4c9402774476c37cfb10ffbd2e5ad7
    <div className={cx("card")}>
      <div className={cx("header")}>
        <div className={cx("header__title")}>{props.title}</div>
        <Ellipse>{props.category_id}</Ellipse>
      </div>
      <div className={cx("contents")}>{props.contents} </div>
      {props.hashtags && <div className={cx("hash")}>{props.hashtags}</div>}
      <div className={cx("info")}>
<<<<<<< HEAD
        <Icon type="location" size="xsm" />

        <div className={cx("info__place")}>{props.spot}</div>

        <div className={cx("info__date")}>{set_gap}시간전</div>
>>>>>>> e2f8617... master/fix
=======
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
>>>>>>> b55434a... no message
>>>>>>> 8948c3df38bcebd81ef30c185a7b5d3bbb4f0082
      </div>
<<<<<<< HEAD
      {type ? false : <div className={cx("card_content")}>{Contents}</div>}
=======
<<<<<<< HEAD
        <Icon type="location" size="xsm" />
>>>>>>> 0dc6a91f2b4c9402774476c37cfb10ffbd2e5ad7

        <div className={cx("info__place")}>{props.spot}</div>
=======
        <Icon type='location' size='xsm' />
       
          <div className={cx("info__place")}>{props.spot}</div>
>>>>>>> 70aaeb3c7696578a7b73856cf49739ec4d8dcb8e

<<<<<<< HEAD
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
=======
        <div className={cx("info__date")}>{set_gap}시간전</div>
      </div>
>>>>>>> 0dc6a91f2b4c9402774476c37cfb10ffbd2e5ad7
      <div className={cx("bottom")}>
        <div className={cx("bottom__comentcount")}>{props.comentcounte}</div>
        <div className={cx("bottom__commenticon")}>
          <Icon type="message" />
        </div>
        <div className={cx("bottom__likeicon")} onClick={onLike}>
          {like ? <Icon type="heart" /> : <Icon type="heart-dimmed" />}
        </div>
        <div className={cx("bottom__likecount")}>{likecount}</div>
        <div className={cx("bottom__viewicon")}>
<<<<<<< HEAD
<<<<<<< HEAD
          <Icon type='viewer' />
>>>>>>> e907aec... style. assets에 로그인 로고 추가 docs. 마이페이지
=======
          <Icon type="viewer" />
>>>>>>> e2f8617... master/fix
=======
          <Icon type="viewer" />
>>>>>>> 0dc6a91f2b4c9402774476c37cfb10ffbd2e5ad7
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
<<<<<<< HEAD
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
=======
  title: "제목 없음",
  contents: "내용 없음",
  spot: "강남역",
>>>>>>> 0dc6a91f2b4c9402774476c37cfb10ffbd2e5ad7
  date: "0시간 전",
  comentcounte: "0",
  viewcount: "0",
  likecount: "0",
  ellipse: "고백썰",
  islike: false
<<<<<<< HEAD
>>>>>>> e907aec... style. assets에 로그인 로고 추가 docs. 마이페이지
=======
>>>>>>> 0dc6a91f2b4c9402774476c37cfb10ffbd2e5ad7
};

export default CardView;
