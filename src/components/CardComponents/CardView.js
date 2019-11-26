import React from "react";
<<<<<<< HEAD:src/components/CardComponents/CardView.js
import {
  MdFavorite,
  MdFavoriteBorder,
  MdVisibility,
  MdSms
} from "react-icons/md";
import styles from "./Card.scss";
=======

import styles from "./CardView.scss";
>>>>>>> b5bd9fe... no message:src/views/components/Card/CardView.js
import classNames from "classnames/bind";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);

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


  return (
    <div className={cx("card_container")}>
      <div className={cx("card_head")}>
        <div className={cx("card_title")}>{title}</div>
        <div className={cx("card_commentcount")}>{commentCount}</div>
        <button className={cx("card_commentbutton")}>
          <Icon type="test"/>
        </button>
      </div>
      {type ? false : <div className={cx("card_content")}>{Contents}</div>}

      <div className={cx("card_hashtag", type)}>{Hashtag}</div>

      <div className={cx("card_bottom", type)}>
        {type ? <hr className={cx("hr")} /> : false}
        <div className={cx("card_date")}>{carddate}</div>
        <div className={cx("card_bottom_box")}>
          <div className={cx("card_conut")}>{Viewcount}</div>
          <div className={cx("card_button")}>
            <Icon type="test" />
          </div>
          <div className={cx("card_conut")}>{Likecount}</div>
          <button className={cx("card_button")}>
            {done ? <Icon type="test"  /> : <Icon />}
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
  title: "제목 없음",
  carddate: "00시간 전",
  Contents: "내용 없음",
  Viewcount: 0,
  Likecount: 0,
  commentCount: 0
};

export default CardView;
