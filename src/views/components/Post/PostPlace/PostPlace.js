import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Icon from "../../Icon/Icon";

const cx = classNames.bind();

const PostPlace = ({ ...props }) => {
  return (
    <div className={cx("post__tap")} onClick={props.handlePlaceModal}>
      <span className={cx("post__add")}>장소 추가</span>
      <Icon type="arrow-small-right" />
    </div>
  );
};

PostPlace.propTyps = {
  handlePlaceModal: PropTypes.func
};

PostPlace.defaultProps = {
  handlePlaceModal: () => {
    console.log("handlePlaceModal is null");
  }
};

export default PostPlace;
