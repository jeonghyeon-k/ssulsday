import React, { useState } from "react";
import styles from "./SearchInput.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Icon from "../../Icon/Icon";

const cx = classNames.bind(styles);

const SearchInput = ({ ...props }) => {
  const [value, setValue] = useState("");
  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
    props.selected === "favorite" && props.setFilterdSearchFavoriteValue(value);
    props.selected === "place" && props.setFilterdSearchPlaceValue(value);
    props.selected === "tag" && props.setFilterdSearchTagValue(value);
  };
  const handleRemove = () => {
    setValue("");
    props.selected === "favorite" && props.setFilterdSearchFavoriteValue("");
    props.selected === "place" && props.setFilterdSearchPlaceValue("");
    props.selected === "tag" && props.setFilterdSearchTagValue("");
  };

  return (
    <div className={cx("input__wrapper")}>
      <div className={cx("search-icon")}>
        <Icon type="search" />
      </div>
      <input
        className={cx("input__text")}
        placeholder="장소 또는 키워드 검색하세요."
        value={value}
        onChange={handleChange}
      />
      <div className={cx("search__close")} onClick={handleRemove}>
        <Icon type="close" />
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  setFilteredTagValue: PropTypes.func,
  selected: PropTypes.string,
  setFilterdSearchFavoriteValue: PropTypes.func,
  setFilterdSearchPlaceValue: PropTypes.func,
  setFilterdSearchTagValue: PropTypes.func
};

SearchInput.defaultProps = {
  setFilteredTagValue: () => {
    console.log("setFilteredTagValue is null");
  },
  selected: "favorite",
  setFilterdSearchFavoriteValue: () => {
    console.log("setFilterdSearchFavoriteValue is null");
  },
  setFilterdSearchPlaceValue: () => {
    console.log("setFilterdSearchPlaceValue is null");
  },
  setFilterdSearchTagValue: () => {
    console.log("setFilterdSearchTagValue is null");
  }
};

export default SearchInput;
