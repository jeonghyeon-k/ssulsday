import React from "react";
import styles from "./Mypage.scss";
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
=======
=======
>>>>>>> 3c72d1f... fix. starcount error
  const { userid } = props.match.params;
>>>>>>> 84a06a7... 리베이스 커밋

=======
<<<<<<< HEAD
>>>>>>> a949e3845704c9639f343fbfe1b2757af112d8ef
=======
>>>>>>> b7a33972f3cc18e8ac567d1a402c7ea9368a0583
=======
  let id = localStorage.getItem("userid");

  const onUpdate = () => {
    window.location.assign("/mypage/updateuser");
  };

  const onLogout = () => {
    localStorage.login = false;
    window.location.assign("/");
  };
>>>>>>> 738cf39... fix. error
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
          <Icon type='location-2' />
        </div>
        <div className={cx("header__username")}>{id}</div>
        <div onClick={onUpdate} className={cx("header__editicon")}>수정</div>
>>>>>>> 3c72d1f... fix. starcount error
        <hr className={cx("header__hr")} />
      </div>
      <div className={cx("box")}>
        <div className={cx("box__count")}>{props.mycontentcount}</div>
        <div className={cx("box__title")}>작성한 글</div>
>>>>>>> e907aec... style. assets에 로그인 로고 추가 docs. 마이페이지
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

Mypage.prototype = {

};
Mypage.defaultProps = {
  mycontentcount: 0,
  mycommentcount:0,
  mylikecount:0
};

export default Mypage;
