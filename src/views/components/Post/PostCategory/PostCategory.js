import React, { useState } from "react";
import styles from "./PostCategory.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Icon from "../../Icon/Icon";

const cx = classNames.bind(styles);

const PostCategory = ({ ...props }) => {
  return (
    <>
      <div className={cx("post__tap")} onClick={props.handleCategoryModal}>
        <span className={cx("post__add")}>{props.kind}</span>
        <Icon type="test" />
      </div>
    </>
  );
};

PostCategory.propTypes = {
  kind: PropTypes.string,
  setKind: PropTypes.func
};

PostCategory.defaultProps = {
  kind: "kind is null",
  setKind: () => {
    console.log("setKind is null");
  }
};

export default PostCategory;
