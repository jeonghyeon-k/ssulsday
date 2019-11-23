import React from "react";
import classNames from "classnames/bind";

import Icon from "../../Icon/Icon";

const cx = classNames.bind();

const PostPlace = ({ ...props }) => {
  return (
    <div className={cx("post__tap")} onClick={props.handlePlaceModal}>
      <span className={cx("post__add")}>장소 추가</span>
      <Icon type="test" />
    </div>
  );
};

export default PostPlace;
