import React, { useState } from "react";
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
  const to = "/" + props.val;
  return (
    <Link
      className={cx("tapblock")}
      to={to}
      onClick={() => handleTapClick(props.val)}
    >
      <div className={cx("tapblock__icon")}>
        <Icon
          type={props.isTap ? props.type : props.type + "-black"}
          size="md"
        />
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
  const [tap, setTap] = useState(props.selected);

  return (
    <div className={cx("tapbar")}>
      <TapBlock
        type="tab-home"
        val=""
        isTap={tap === "home" ? true : false}
        setTap={setTap}
      >
        홈
      </TapBlock>
      <TapBlock
        type="tab-location"
        val="list"
        isTap={tap === "list" ? true : false}
        setTap={setTap}
      >
        재미있썰
      </TapBlock>
      <TapBlock
        type="tab-write"
        val="post"
        isTap={tap === "post" ? true : false}
        setTap={setTap}
      >
        뭐했썰
      </TapBlock>
      <TapBlock
        type="tab-mypage"
        val="mypage"
        isTap={tap === "mypage" ? true : false}
        setTap={setTap}
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
  type: PropTypes.oneOf([
    "tab-home",
    "tab-location",
    "tab-write",
    "tab-mypage"
  ]),
  val: PropTypes.string,
  isTap: PropTypes.bool,
  setTap: PropTypes.func,
  children: PropTypes.oneOf(["홈", "재미있썰", "뭐했썰", "마이페이지"])
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
