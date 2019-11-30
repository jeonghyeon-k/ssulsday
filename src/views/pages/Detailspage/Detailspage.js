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
<<<<<<< HEAD
import {getCardById} from "../../../repository/CardRepository";
import Modal from "../../components/Modal/PostModal/PostModal"
=======
import { getCardById } from "../../../repository/CardRepository";
import DetailHeader from "../../components/DetailHeader";
<<<<<<< HEAD
>>>>>>> f073f03f245d74ab977ac426c282360a8173967e
=======
<<<<<<< HEAD
>>>>>>> 448991ea63b96fb93ffaa84389d22ccae3ac6869
=======
import place from "../../../assets/images/invalidName.png";
>>>>>>> a619475... feat. 장소사진 추가
>>>>>>> f8b271d... feat.댓글 입력폼

const cx = classNames.bind(styles);

const Detailspage = ({ ...props }, { commentlist }) => {
  const [like, setLike] = useState(props.islike);
  const[likecount, setCount] = useState(postid);
  const [isModal, setModal] = useState(true);
  const onLike = () => {
    if(!like){
      let getcount = Number(likecount)+1;
      setCount(getcount);
      setLike(!like);
    }else{ 
      setCount(likecount-1);
      setLike(!like);
    }
  };

  const [card, setCard] = useState(null);
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchUsers () {
      try {
<<<<<<< HEAD
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
=======
        const resCard = await getCardById({ postId: postid });
        const dataCard = resCard.data;
        setCard(dataCard);
        const resComment = await getCommentById({ id: postid })
        const dataComment = resComment.data;
        setComment(dataComment);
>>>>>>> db81a76... [master]/fix detailPage UPdate
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
<<<<<<< HEAD
     
      <Navbar />
=======
      <DetailHeader history={props.history} />
>>>>>>> f073f03f245d74ab977ac426c282360a8173967e
      <Ellipse />
      <div className={cx("pageblock")}>
        <div className={cx("title")}>{card.post_title}</div>
        <div className={cx("head")}>
          <div className={cx("head__username")}>{card.username}</div>
          <div className={cx("head__date")}>{props.date}</div>
          <div className={cx("head__likeicon")} onClick={onLike}>
            {like ? <Icon type="heart" /> : <Icon type="heart-dimmed" />}
          </div>
          <div className={cx("head__likecount")}>{likecount}</div>
          <div className={cx("head__viewicon")}>
            <Icon type="viewer" />
          </div>
          <div className={cx("head__viewcount")}>{card.viewcount}</div>
        </div>
        <hr className={cx("hrbar")} />
        <div className={cx("cardcontent")}>{card.post_content}</div>
        <div className={cx("hashtag")}>{card.hashtags}</div>
        <div className={cx("placeicon")}>
          <Icon type="location" />
        </div>
        <div className={cx("spot")}>{props.spot}</div>
        <div className={cx("map")}>
          <img src= {place} alt="place"/>
        </div>
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
<<<<<<< HEAD
<<<<<<< HEAD
      <CommnetCreate postId= {props.cardid} />
=======
=======
>>>>>>> 8241650... feat. 좋아요
      {isModal ? <Modal type='post'/> : <CommnetCreate postId= {props.cardid} userId={props.userId} />}
>>>>>>> b8e1436... no message
=======
<<<<<<< HEAD
      <CommnetCreate postId= {props.cardid} />
=======
      <CommnetCreate postId={props.cardid} userId={props.userId} />
>>>>>>> 84a06a7... 리베이스 커밋
=======
      <CommnetCreate postId={props.cardid} />
<<<<<<< HEAD
>>>>>>> a949e3845704c9639f343fbfe1b2757af112d8ef
>>>>>>> f073f03f245d74ab977ac426c282360a8173967e
=======
>>>>>>> b7a33972f3cc18e8ac567d1a402c7ea9368a0583
>>>>>>> 448991ea63b96fb93ffaa84389d22ccae3ac6869
=======
      <CommnetCreate postId={postid} userId={props.user_id} />
>>>>>>> c31fc0e... feat. 댓글 수정
>>>>>>> 8241650... feat. 좋아요
    </div>
  );
};

Detailspage.prototype = {
  title: PropTypes.string,
  user_id: PropTypes.string,
  username: PropTypes.string,
  date: PropTypes.string,
  viewcount: PropTypes.string,
  likecount: PropTypes.string,
  contents: PropTypes.string,
  hashtags: PropTypes.string,
  spot: PropTypes.string.isRequired,
  commentcount: PropTypes.string,
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
