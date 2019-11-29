import React from "react";
import styles from "./PlaceCard.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import place from "../../../assets/images/place.png";
import Icon from "../Icon/Icon";

const cx = classNames.bind(styles);

const PlaceCard = ({ ...props }) => {
  return (
    <div>
      <div className={cx("placecard")}>
        <img className={cx("placecard__image")} src={place} alt="" />
        <div className={cx("shadow")}>
          <div className={cx("info")}>
            <div className={cx("spot")}>
              <Icon type="location" size="lmd" />
              <div className={cx("spot__text")}>{props.spot}</div>
            </div>
            <div className={cx("stories")}>{props.stories}개</div>
          </div>
          {props.hashTags && (
            <div className={cx("hashtags")}>{props.hashTags}</div>
          )}
        </div>
      </div>
    </div>
  );
};

PlaceCard.propTypes = {
  spot: PropTypes.string.isRequired,
  stories: PropTypes.number,
  hashTags: PropTypes.string
};

PlaceCard.defaultProps = {
  spot: "null spot",
  stories: 0,
  hashTags: "null hashtags"
};

export default PlaceCard;
