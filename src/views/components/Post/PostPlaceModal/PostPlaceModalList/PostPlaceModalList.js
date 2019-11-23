import React, { useState } from "react";
import styles from "./PostPlaceModalList.scss";
import classNames from "classnames/bind";
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

export default PostPlaceModalList;
