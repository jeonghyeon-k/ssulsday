import React from "react";
import styles from "./SearchList.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Icon from "../../Icon/Icon";

const cx = classNames.bind(styles);

const Search = ({ ...props }) => {
  return (
    <div className={cx("tag")}>
      <Icon type="location-icon" />
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
