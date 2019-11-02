import React from "react";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdVisibility,
  MdSms
} from "react-icons/md";
import styles from "./Card.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

function CardView({
  type,
  done,
  title,
  commentCount,
  Hashtag,
  carddate,
  Viewcount,
  Likecount,
  Contents
}) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("card_container")}>
      <div className={cx("card_head")}>
        <div className={cx("card_title")}>{title}</div>
        <div className={cx("card_commentcount")}>{commentCount}</div>
        <button className={cx("card_commentbutton")}>
          <MdSms />
        </button>
      </div>
      {type ? null : <div className={cx("card_content")}>{Contents}</div>}

      <div className={cx("card_hashtag", type)}>{Hashtag}</div>

      <div className={cx("card_bottom", type)}>
        {type ? <hr className={cx("hr")} /> : null}
        <div className={cx("card_date")}>{carddate}</div>
        <div className={cx("card_bottom_box")}>
          <div className={cx("card_conut")}>{Viewcount}</div>
          <div className={cx("card_button")}>
            <MdVisibility />
          </div>
          <div className={cx("card_conut")}>{Likecount}</div>
          <button className={cx("card_button")}>
            {done ? <MdFavorite color='red' /> : <MdFavoriteBorder />}
          </button>
        </div>
      </div>
    </div>
  );
}

CardView.prototype = {
  type: PropTypes.string,
  done: PropTypes.bool,
  title: PropTypes.string,
  Hashtag: PropTypes.string,
  carddate: PropTypes.instanceOf(),
  Contents: PropTypes.string,
  Viewcount: PropTypes.number,
  Likecount: PropTypes.number,
  commentCount: PropTypes.number
};

CardView.defaultProps = {
  type: "",
  done: false,
  title: "Null",
  Hashtag: "Null",
  carddate: "Null",
  Contents: "Null",
  Viewcount: 0,
  Likecount: 0,
  commentCount: 0
};

export default CardView;
