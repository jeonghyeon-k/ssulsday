import React, {useState} from "react";
import classNames from "classnames/bind";
<<<<<<< HEAD:src/components/CommentComponets/commentCreate.js
<<<<<<< HEAD
import styles from "./Comment.scss";
=======
import styles from "./CommentCreate.scss";
=======
<<<<<<< HEAD:src/components/CommentComponets/commentCreate.js
import styles from "./Comment.scss";
=======
import styles from "./CommentCreate.scss";
=======
import styles from "./CommentCreate.module.scss";
>>>>>>> 4c8ca83... feat. 상세페이지 라우터설정:src/views/components/CommentCreate/commentCreate.js
<<<<<<< HEAD
>>>>>>> f25040b2071d69a125aec6f6920229b1ed02e1b5
=======
>>>>>>> 0dc6a91f2b4c9402774476c37cfb10ffbd2e5ad7
>>>>>>> 30eb86ba6d791d236d98eb973ac55f802711e742
import PropTypes from "prop-types";
import {ApiPostComment} from "../../../repository/CommentRepository";
>>>>>>> 58cbadf... feat. Api 설정:src/views/components/CommentCreate/commentCreate.js

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
    <div className={cx("create_container")}>
      <input
<<<<<<< HEAD:src/components/CommentComponets/commentCreate.js
        className={cx("create_content")}
        autoFocus
=======
        className={cx("createcommnet__form")}
        autoFocus={true}
<<<<<<< HEAD:src/components/CommentComponets/commentCreate.js
>>>>>>> b5bd9fe... no message:src/views/components/CommentCreate/commentCreate.js
=======
        value = {text}
        onChange={onChange} 
>>>>>>> 58cbadf... feat. Api 설정:src/views/components/CommentCreate/commentCreate.js
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
<<<<<<< HEAD

CommentCreate.defaultProps = {
  userId : "redhd0410@gmail.com"
<<<<<<< HEAD
=======

};
>>>>>>> 30eb86ba6d791d236d98eb973ac55f802711e742

=======
CommentCreate.defaultProps = {
  userId : "redhd0410@gmail.com"
<<<<<<< HEAD
>>>>>>> f25040b2071d69a125aec6f6920229b1ed02e1b5
=======
>>>>>>> 30eb86ba6d791d236d98eb973ac55f802711e742
};

>>>>>>> 0dc6a91f2b4c9402774476c37cfb10ffbd2e5ad7

export default CommentCreate;
