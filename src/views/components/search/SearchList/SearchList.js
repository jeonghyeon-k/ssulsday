import React from "react";
import styles from "./SearchList.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Icon from "../../Icon/Icon";

import { ApiCardByHashTag } from "../../../../repository/CardRepository";

const cx = classNames.bind(styles);

const Search = ({ ...props }) => {
  const handleSearchList = () => {
    console.log(props.val);
    ApiCardByHashTag({ searchKeyword: props.val }).then(data => {
      console.log(data);
    });
  };
  return (
    <div className={cx("tag")} onClick={handleSearchList}>
      <Icon type="location-icon" className="location__icon" />
      <span className={cx("tag__text")}>{props.val}</span>
    </div>
  );
};

const SearchList = ({ ...props }) => {
  return (
    <>
      {props.selected === "place" && (
        <div className={cx("around")}>
          <Icon type="location-3" className="location-3" />
          <span className={cx("around__text")}>현재 위치 근처 장소</span>
        </div>
      )}
      {props.searchList.map((val, index) => (
        <Search val={val} key={index} />
      ))}
    </>
  );
};

SearchList.propTypes = {
  selected: PropTypes.string,
  searchList: PropTypes.array
};

SearchList.defaultProps = {
  selected: "favorite",
  searchList: []
};

Search.propTypes = {
  val: PropTypes.string
};

Search.defaultProps = {
  val: "val is null"
};

export default SearchList;
