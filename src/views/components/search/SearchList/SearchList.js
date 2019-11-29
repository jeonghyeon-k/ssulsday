import React from "react";
import styles from "./SearchList.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "../../Icon/Icon";

const cx = classNames.bind(styles);

const Search = ({ ...props }) => {
  const path = `/list/?searchKeyword=${props.val}`;
  return (
    <div className={cx("tag")}>
      <Link to={path}>
        <Icon type="location-icon" className="location__icon" />
        <span className={cx("tag__text", "search__link")}>{props.val}</span>
      </Link>
    </div>
  );
};

const SearchList = ({ ...props }) => {
  return (
    <>
      {props.selected === "place" && (
        <div className={cx("around")}>
          <Icon type="location-3" className="location-icon3" />
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
