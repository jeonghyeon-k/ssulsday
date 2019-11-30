import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./Icon.module.scss";
const cx = classNames.bind(styles);

export default function Icon(props) {
  if (props.src) {
    return (
      <img
        src={props.src}
        alt={props.alt}
        className={cx(props.size, props.style, props.className)}
      />
    );
  }
  return (
    <i
      className={cx("icon", props.type, props.size, props.className)}
      title={props.alt}
    />
  );
}
Icon.propTypes = {
  type: PropTypes.oneOf([
    "message",
    "location",
    "viewer",
    "heart-dimmed",
    "tab-home",
    "tab-location",
    "tab-write",
    "tab-mypage",
    "location-2",
    "location-3",
    "navi",
    "heart",
    "tab-home-black",
    "tab-location-black",
    "tab-write-black",
    "tab-mypage-black",
    "arrow",
    "close",
    "check-dimmed",
    "check",
    "check--color",
    "search",
    "arrow-small",
    "arrow-small-right",
    "location-icon-hash",
    "location-icon",
    "big-search",
    "spin",
    "share",
    "more",
    "check--color-dimmed"
  ]),
  size: PropTypes.oneOf(["xsm", "sm", "md", "lmd", "lg"]),
  alt: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.string,
  className: PropTypes.string
};
Icon.defaultProp = {
  type: "test",
  size: "md",
  alt: ""
};
