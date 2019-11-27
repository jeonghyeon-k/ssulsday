import React from "react";
import styles from "./SearchInput.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Icon from "../../Icon/Icon";

const cx = classNames.bind(styles);

const SearchInput = ({ ...props }) => {
  const handleChange = e => {
    props.setFilteredTagValue && props.setFilteredTagValue(e.target.value);
    props.setFilteredPlaceValue && props.setFilteredPlaceValue(e.target.value);
  };

  return (
    <div className={cx("input__wrapper")}>
      <Icon type="test" />
      <input
        className={cx("input__text")}
        placeholder="장소 또는 키워드 검색하세요."
        onChange={handleChange}
      />
    </div>
  );
};

SearchInput.propTypes = {
  setFilteredTagValue: PropTypes.func
};

SearchInput.defaultProps = {
  setFilteredTagValue: () => {
    console.log("setFilteredTagValue is null");
  }
};

export default SearchInput;
