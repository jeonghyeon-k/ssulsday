import React from "react";
import styles from "./TapBar.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const cx = classNames.bind(styles);

const TapBlock = ({ children, ...props }) => {
  const handleTapClick = val => {
    props.setTap(val);
  };
  const to = "/" + props.tap;
  return (
    <Link
      className={cx("tapblock")}
      to={to}
      onClick={() => handleTapClick(props.val)}
    >
      <div className={cx("tapblock__icon")}>
        <Icon type={props.isTap ? props.type : props.type} size="md" />
      </div>
      <span
        className={cx("tapblock__text", props.isTap && "tapblock__text-istap")}
      >
        {children}
      </span>
    </Link>
  );
};

const TapBar = ({ ...props }) => {
  return (
    <div className={cx("tapbar")}>
      <TapBlock
        type="test"
        val="home"
        isTap={props.selected === "home" ? true : false}
        setTap={props.setTap}
      >
        홈
      </TapBlock>
      <TapBlock
        type="test"
        val="list"
        isTap={props.selected === "list" ? true : false}
        setTap={props.setTap}
      >
        재미있썰
      </TapBlock>
      <TapBlock
        type="test"
        val="post"
        isTap={props.selected === "post" ? true : false}
        setTap={props.setTap}
      >
        뭐했썰
      </TapBlock>
      <TapBlock
        type="test"
        val="mypage"
        isTap={props.selected === "mypage" ? true : false}
        setTap={props.setTap}
      >
        마이페이지
      </TapBlock>
    </div>
  );
};

TapBar.propTypes = {
  selected: PropTypes.string,
  setTap: PropTypes.func
};

TapBar.defaultProps = {
  selected: "home",
  setTap: () => {
    console.log("set Tap is null");
  }
};

TapBlock.propTypes = {
  //type은 추후 icon에 맞춰서 수정
  type: PropTypes.oneOf(["home,list,post,mypage"]),
  val: PropTypes.oneOf(["home,list,post,mypage"]),
  isTap: PropTypes.bool,
  setTap: PropTypes.func,
  children: PropTypes.oneOf(["홈,재미있썰,뭐했썰,마이페이지"])
};

TapBlock.defaultProps = {
  type: "test",
  val: "home",
  isTap: false,
  setTap: () => {
    console.log("set Tap is null");
  },
  children: "home"
};

export default TapBar;
