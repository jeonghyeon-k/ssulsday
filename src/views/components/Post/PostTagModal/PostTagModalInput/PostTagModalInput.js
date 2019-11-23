import React from "react";
import styles from "./PostTagModalInput.scss";
import classNames from "classnames/bind";
import Icon from "../../../Icon/Icon";

const cx = classNames.bind(styles);

const PostTagModalInput = ({ ...props }) => {
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

export default PostTagModalInput;
