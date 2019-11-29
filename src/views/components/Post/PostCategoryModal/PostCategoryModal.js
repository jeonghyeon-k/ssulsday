import React from "react";
import styles from "./PostCategoryModal.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Icon from "../../Icon/Icon";

const cx = classNames.bind(styles);

const Category = ({ ...props }) => {
  const handleKind = value => {
    props.setKind(value);
    props.handleCategoryModal();
    props.setCategoryId();
  };
  return (
    <div
      className={cx("category__kind")}
      onClick={() => handleKind(props.value)}
    >
      {props.value}
    </div>
  );
};

const PostCategoryModal = ({ ...props }) => {
  return (
    <>
      <div className={cx("modal")}>
        <div
          className={cx("modal__background")}
          onClick={props.handleCategoryModal}
        />
        <div className={cx("modal__category")}>
          <div className={cx("modal__header")}>
            <div className="close" onClick={props.handleCategoryModal}>
              <Icon type="close" />
            </div>
            <div className={cx("modal__title")}>카테고리</div>
          </div>
          <Category
            value="고백썰"
            setKind={props.setKind}
            setCategoryId={() => props.setCategoryId(1)}
            handleCategoryModal={props.handleCategoryModal}
          />
          <Category
            value="이별썰"
            setKind={props.setKind}
            setCategoryId={() => props.setCategoryId(2)}
            handleCategoryModal={props.handleCategoryModal}
          />
          <Category
            value="이상형썰"
            setKind={props.setKind}
            setCategoryId={() => props.setCategoryId(3)}
            handleCategoryModal={props.handleCategoryModal}
          />
        </div>
      </div>
    </>
  );
};

PostCategoryModal.propTypes = {
  setKind: PropTypes.func,
  handleCategoryModal: PropTypes.func
};

PostCategoryModal.defaultProps = {
  setKind: () => {
    console.log("setKind is null");
  },
  handleCategoryModal: () => {
    console.log("handleCategoryModal is null");
  }
};

export default PostCategoryModal;
