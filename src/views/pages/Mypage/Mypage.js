import React from "react";
import styles from "./Mypage.scss";
import classNames from "classnames/bind";
import Navbar from "../../components/Navbar/Navbar";
import Icon from "../../components/Icon/Icon";
import Item from "./item/item";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Mypage = ({ ...props }) => {
  return (
    <div className={cx("template")}>
      <Navbar />
      <div className={cx("Mypageheader")}>
        <div className={cx("header__usericon")}>
          <Icon type='location-2' />
        </div>
        <div className={cx("header__username")}>{props.name}</div>
        <div className={cx("header__editicon")}>수정</div>
        <hr />
      </div>
      <Link to='/'>
        <div className={cx("box")}>
          <div className={cx("box__count")}>{props.mycontentcount}</div>
          <div className={cx("box__title")}>작성한 글</div>
        </div>
      </Link>
      <Link to='/'>
        <div className={cx("box")}>
          <div className={cx("box__count")}>{props.mycommentcount}</div>
          <div className={cx("box__title")}>댓글 단 글</div>
        </div>
      </Link>
      <Link to='/'>
        <div className={cx("box")}>
          <div className={cx("box__count")}>{props.mylikecount}</div>
          <div className={cx("box__title")}>좋아한 글</div>
        </div>
      </Link>

      <div className={cx("support")}>
        <div className={cx("item__title")}>지원</div>
        <Link to='/'>
          <Item title='공지사항' />
        </Link>
        <hr />
        <Link to='/'>
          <Item title='도움말' />
        </Link>
        <hr />
        <Link to='/'>
          <Item title='문의하기' />
        </Link>
      </div>

      <div className={cx("account")}>
        <div className={cx("item__title")}>계정</div>
        <Item title='로그아웃' />
      </div>
    </div>
  );
};

Mypage.prototype = {};
Mypage.defaultProps = {
  name: "test",
  mycontentcount: 0,
  mycommentcount: 0,
  mylikecount: 0
};

export default Mypage;
