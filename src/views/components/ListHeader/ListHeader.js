import React from "react";
import styles from "./ListHeader.scss";
import classNames from "classnames/bind";
import Icon from "../Icon";
const cx = classNames.bind(styles);

const ListHeader = () => {
  return (
    <div className={cx("list__wrapper")}>
      <div className={cx("list__arrow")}>
        <Icon type="arrow" />
      </div>
      <input
        className={cx("list__input")}
        placeholder="위치 또는 태그를 입력해주세요."
      />
      <div className={cx("list__search")}>
        <Icon type="search" />
      </div>
    </div>
  );
};

export default ListHeader;
