import React, { useState, useEffect } from "react";
import styles from "./Detailspage.scss";
import classNames from "classnames/bind";
import Navbar from "../../components/Navbar/Navbar";
import Ellipse from "../../components/Ellipse/Ellipse";
import Comment from "../../components/Comment/Comment";
import CommnetCreate from "../../components/CommentCreate/commentCreate";
import PropTypes from "prop-types";
import Icon from "../../components/Icon/Icon";
import { getCommentById } from "../../../repository/CommentRepository";
import { getCardById } from "../../../repository/CardRepository";
import DetailHeader from "../../components/DetailHeader";

const cx = classNames.bind(styles);

const Detailspage = ({ ...props }, { commentlist }) => {
  const [like, setLike] = useState(props.islike);
  const onLike = () => {
    setLike(!like);
  };

  const [card, setCard] = useState(null);
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        getCardById({ postId: props.cardid }).then(data => {
          const response = data.data;
          console.log(response);
          setCard(response);
        });
        getCommentById({ id: props.cardid }).then(data => {
          const response = data.data;
          console.log(response);
          setComment(response);
        });
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!card) return null;
  return (
    <div className={cx("Template")}>
      <DetailHeader history={props.history} />
      <Ellipse />
      <div className={cx("pageblock")}>
        <div className={cx("title")}>{card.card_title}</div>
        <div className={cx("head")}>
          <div className={cx("head__username")}>{card.username}</div>
          <div className={cx("head__date")}>{props.date}</div>
          <div className={cx("head__likeicon")} onClick={onLike}>
            {like ? <Icon type="heart" /> : <Icon type="heart-dimmed" />}
          </div>
          <div className={cx("head__likecount")}>{card.likecount}</div>
          <div className={cx("head__viewicon")}>
            <Icon type="viewer" />
          </div>
          <div className={cx("head__viewcount")}>{card.viewcount}</div>
        </div>
        <hr className={cx("hrbar")} />
        <div className={cx("cardcontent")}>{card.card_content}</div>
        <div className={cx("hashtag")}>{card.hashtags}</div>
        <div className={cx("placeicon")}>
          <Icon type="location" />
        </div>
        <div className={cx("spot")}>{props.spot}</div>
        <div className={cx("map")}></div>
        <div className={cx("commentcount")}>{card.commentcount}</div>
        <div className={cx("commenticon")}>
          <Icon type="message" />
        </div>
        <hr className={cx("hrbar")} />
      </div>
      {comment.map(comment => (
        <Comment
          Nickname={comment.username}
          comment={comment.comment_content}
        />
      ))}
<<<<<<< HEAD
      <CommnetCreate postId= {props.cardid} />
=======
      <CommnetCreate postId={props.cardid} userId={props.userId} />
>>>>>>> 84a06a7... 리베이스 커밋
    </div>
  );
};

Detailspage.prototype = {
  title: PropTypes.string,
  username: PropTypes.string,
  date: PropTypes.string,
  viewcount: PropTypes.string,
  likecount: PropTypes.string,
  contents: PropTypes.string,
  hashtags: PropTypes.string,
  spot: PropTypes.string.isRequired,
  comentcounte: PropTypes.string,
  commentlist: PropTypes.func
};

Detailspage.defaultProps = {
  cardid: 1,
  title: "제목없음",
  username: "익명이",
  date: "0시간",
  viewcount: 0,
  likecount: 0,
  contents: "내용없음",
  hashtags: "",
  spot: "장소없음",
  commentcount: 0,
  commentlist: {}
};

export default Detailspage;
