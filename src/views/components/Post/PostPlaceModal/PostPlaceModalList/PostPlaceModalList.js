import React from "react";
import styles from "./PostPlaceModalList.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Icon from "../../../Icon/Icon";

const cx = classNames.bind(styles);

const PostPlace = ({ ...props }) => {
  return (
    <div className={cx("tag")}>
      <Icon type="test" size="lg" />
      <span className={cx("tag__text")} onClick={() => props.handleAddPlace()}>
        {props.place}
      </span>
    </div>
  );
};

const PostPlaceModalList = ({ ...props }) => {
  return (
    <>
      <div className={cx("around")}>
        <Icon type="test" />
        <span className={cx("around__text")}>현재 위치 근처 장소</span>
      </div>
      {props.places.map((place, index) => (
        <PostPlace
          place={place}
          key={index}
          handleAddPlace={props.handleAddPlace}
        />
      ))}
    </>
  );
};

PostPlaceModalList.propTypes = {
  places: PropTypes.array,
  handleAddPlace: PropTypes.func
};

PostPlaceModalList.defaultProps = {
  places: ["place is null"],
  handleAddPlace: () => {
    console.log("handleAddPlace is null");
  }
};

export default PostPlaceModalList;
