import React from "react";
import styles from "./SearchList.scss";
import classNames from "classnames/bind";
import Icon from "../../Icon/Icon";

const cx = classNames.bind(styles);

const Search = ({ ...props }) => {
  return (
    <div className={cx("tag")}>
      <Icon type="test" size="lg" />
      <span className={cx("tag__text")}>{props.val}</span>
    </div>
  );
};

const SearchList = ({ ...props }) => {
  return (
    <>
      {props.searchList.map((val, index) => (
        <Search val={val} />
      ))}
    </>
  );
};

export default SearchList;
