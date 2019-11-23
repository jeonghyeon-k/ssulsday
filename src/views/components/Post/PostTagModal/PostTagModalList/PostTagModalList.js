import React, { useState } from "react";
import styles from "./PostTagModalList.scss";
import classNames from "classnames/bind";
import Icon from "../../../Icon/Icon";

const cx = classNames.bind(styles);

const PostTag = ({ ...props }) => {
  return (
    <div className={cx("tag")}>
      <Icon type="test" size="lg" />
      <span
        className={cx("tag__text")}
        onClick={() => props.handleAddTag(props.tag)}
      >
        {props.tag}
      </span>
    </div>
  );
};

const PostTagModalList = ({ ...props }) => {
  return (
    <>
      {props.tags.map((tag, index) => (
        <PostTag tag={tag} key={index} handleAddTag={props.handleAddTag} />
      ))}
    </>
  );
};

export default PostTagModalList;
