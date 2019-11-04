import React from "react";
import styles from "./PlaceCard.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import place from "./place.png";
import Icon from "../Icon/Icon";

const cx = classNames.bind(styles);

const PlaceCard = ({ spot, stories, hashtags }) => {
  return (
    <div>
      <div className={cx("placecard")}>
        <img className={cx("placecard__image")} src={place} alt='' />
        <div className={cx("info")}>
          <div className={cx("spot")}>
            <Icon type='test' size='md' />
            <div className={cx("spot__text")}>{spot}</div>
          </div>
          <div className={cx("stories")}>{stories}개</div>
        </div>
        {hashtags ? <div className={cx("hashtags")}>{hashtags}</div> : ""}
      </div>
    </div>
  );
};

PlaceCard.propTypes = {
  spot: PropTypes.string,
  stories: PropTypes.number,
  hashtags: PropTypes.string
};

PlaceCard.defaultProps = {
  spot: "null spot",
  stories: 0,
  hashtags: "null hashtags"
};

export default PlaceCard;
