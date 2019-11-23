import React from "react";
import styles from "./PostTag.scss";
import classNames from "classnames/bind";
import Icon from "../../Icon/Icon";
import Ellipse from "../../Ellipse";

const cx = classNames.bind(styles);

const PostTag = ({ ...props }) => {
  return (
    <div className={cx("post__tap")} onClick={props.handleTagModal}>
      <span className={cx("post__add")}>태그 추가</span>
      <Icon type="test" />
      {props.selectedTags &&
        props.selectedTags.map((tag, index) => (
          <Ellipse isGrey key={index}>
            {tag}
          </Ellipse>
        ))}
    </div>
  );
};

export default PostTag;
