import React from "react";
import styles from "./PostTag.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
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

PostTag.propTypes = {
  selectedTags: PropTypes.array,
  handleTagModal: PropTypes.func
};

PostTag.defaultProps = {
  selectedTags: [],
  handleTagModal: () => {
    console.log("handleTagModal is null");
  }
};

export default PostTag;
