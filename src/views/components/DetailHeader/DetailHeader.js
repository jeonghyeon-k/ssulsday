import React from "react";
import styles from "./DetailHeader.scss";
import classNames from "classnames/bind";
import Icon from "../Icon";

const cx = classNames.bind(styles);

const DetailHeader = ({ ...props }) => {
  const handleBack = () => {
    props.history.goBack();
  };
  return (
    <div className={cx("detail__header")}>
      <div className="detail__header-back" onClick={handleBack}>
        <Icon type="arrow" />
      </div>
      <div
        className={cx("detail__header-share")}
        onClick={() => {
          console.log("모달은 여기서 해주세요");
        }}
      >
        <Icon type="share" />
      </div>
    </div>
  );
};

export default DetailHeader;
