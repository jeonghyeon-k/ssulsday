import React, {useState} from "react";
import classNames from "classnames/bind";
import styles from "./CommentCreate.scss";
import PropTypes from "prop-types";
import {ApiPostComment} from "../../../repository/CommentRepository";

function CommentCreate({postId, userId}) {
  const [text, setText] = useState('');
  const cx = classNames.bind(styles);

  const onChange = (e) => {
    setText(e.target.value);
  };
  
  const onClick =()=>{
    console.log(text);
    ApiPostComment({
      "comment_content": text,
      "post_id": postId,
      "user_id": userId
    }).then(data => {
      const response = data.data;
      console.log(response);
    });
    //setText('');
  }
  return (
    <div className={cx("createcommnet")}>
      <input
        className={cx("createcommnet__form")}
        autoFocus={true}
        value = {text}
        onChange={onChange} 
        placeholder='댓글을 입력하세요'
      />
      <button className={cx("createcommnet__button")} onClick={onClick}>등록</button>
    </div>
  );
}
CommentCreate.prototype = {
  postId :PropTypes.int,
  userId :PropTypes.int
};

CommentCreate.defaultProps = {
  userId : "redhd0410@gmail.com"

};


export default CommentCreate;
