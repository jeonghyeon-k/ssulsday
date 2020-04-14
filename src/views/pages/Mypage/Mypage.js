import React from "react";
import styles from "./Mypage.module.scss";
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
  const { userid } = props.match.params;

=======
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
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
  return (
    <div className={cx("template")}>
      <Navbar />
      <div className={cx("Mypageheader")}>
        <div className={cx("header__usericon")}>
          <Icon type='location-2' />
        </div>
        <div className={cx("header__username")}>{id}</div>
        <div onClick={onUpdate} className={cx("header__editicon")}>수정</div>
        <hr className={cx("header__hr")} />
      </div>
      <div className={cx("box")}>
        <div className={cx("box__count")}>{props.mycontentcount}</div>
        <div className={cx("box__title")}>작성한 글</div>
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

Mypage.prototype = {};
Mypage.defaultProps = {
  mycontentcount: 0,
  mycommentcount: 0,
  mylikecount: 0
};

export default Mypage;
