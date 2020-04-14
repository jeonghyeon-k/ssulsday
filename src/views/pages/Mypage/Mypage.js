import React from "react";
<<<<<<< HEAD
import styles from "./Mypage.scss";
=======
import styles from "./Mypage.module.scss";
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
import classNames from "classnames/bind";
import Navbar from "../../components/Navbar/Navbar";
import Icon from "../../components/Icon/Icon";
import Item from "./item/item";
import TapBar from "../../components/TapBar/TapBar";

const cx = classNames.bind(styles);

const Mypage = ({ ...props }) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 3c72d1f... fix. starcount error
  const { userid } = props.match.params;
>>>>>>> 84a06a7... 리베이스 커밋

=======
<<<<<<< HEAD
>>>>>>> a949e3845704c9639f343fbfe1b2757af112d8ef
=======
=======
  const { userid } = props.match.params;

=======
>>>>>>> 0dc6a91f2b4c9402774476c37cfb10ffbd2e5ad7
>>>>>>> b7a33972f3cc18e8ac567d1a402c7ea9368a0583
=======
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
  let id = localStorage.getItem("userid");

  const onUpdate = () => {
    window.location.assign("/mypage/updateuser");
  };

  const onLogout = () => {
    localStorage.login = false;
    window.location.assign("/");
  };
<<<<<<< HEAD
>>>>>>> 738cf39... fix. error
<<<<<<< HEAD
>>>>>>> 3c72d1f... fix. starcount error
  return (
    <div className={cx("template")}>
      <Navbar />
      <div className={cx("header")}>
        <div className={cx("header__usericon")}>
<<<<<<< HEAD
<<<<<<< HEAD
          <Icon type='test' />
=======
          <Icon type="location-2" />
<<<<<<< HEAD
>>>>>>> 84a06a7... 리베이스 커밋
=======
>>>>>>> b7a3397... 헤더 마무리
>>>>>>> a949e3845704c9639f343fbfe1b2757af112d8ef
        </div>
        <div className={cx("header__username")}>{props.name}</div>
<<<<<<< HEAD
        <div className={cx("header__editicon")}>
          <Icon type='test' />
        </div>
        <hr />
=======
        <div className={cx("header__editicon")}>수정</div>
=======
=======
=======
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
>>>>>>> 0dc6a91f2b4c9402774476c37cfb10ffbd2e5ad7
  return (
    <div className={cx("template")}>
      <Navbar />
      <div className={cx("Mypageheader")}>
        <div className={cx("header__usericon")}>
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
          <Icon type='location-2' />
        </div>
        <div className={cx("header__username")}>{id}</div>
        <div onClick={onUpdate} className={cx("header__editicon")}>수정</div>
<<<<<<< HEAD
>>>>>>> 3c72d1f... fix. starcount error
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
        <hr className={cx("header__hr")} />
      </div>
      <div className={cx("box")}>
        <div className={cx("box__count")}>{props.mycontentcount}</div>
        <div className={cx("box__title")}>작성한 글</div>
<<<<<<< HEAD
>>>>>>> e907aec... style. assets에 로그인 로고 추가 docs. 마이페이지
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
      </div>

      <div className={cx("box")}>
        <div className={cx("box__count")}>{props.mycommentcount}</div>
        <div className={cx("box__title")}>댓글 단 글</div>
      </div>

      <div className={cx("box")}>
        <div className={cx("box__count")}>{props.mylikecount}</div>
        <div className={cx("box__title")}>좋아한 글</div>
      </div>
      <div className={cx("support")}>
        <div className={cx("item__title")}>지원</div>
        <Item title='문의하기' />
      </div>
      <div className={cx("account")}>
        <div className={cx("item__title")}>계정</div>
        <div onClick={onLogout}>
          <Item title='로그아웃' />
        </div>
      </div>
      <TapBar selected='mypage' />
    </div>
  );
};

<<<<<<< HEAD
Mypage.prototype = {

};
Mypage.defaultProps = {
  mycontentcount: 0,
  mycommentcount:0,
  mylikecount:0
=======
Mypage.prototype = {};
Mypage.defaultProps = {
  mycontentcount: 0,
  mycommentcount: 0,
  mylikecount: 0
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
};

export default Mypage;
