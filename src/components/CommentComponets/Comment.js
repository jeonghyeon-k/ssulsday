import React from 'react';
import classNames from 'classnames';
import './Comment.scss';

function Comment ({type}){

    return(

    <div className={classNames("comment_container",type)}>
        <div className="comment_head">익명이</div>
        <div className ="content_container">
                <div className={classNames("comment",type)}>고백을 하셨네요</div>
        </div>
        <div className="comment_bottom">
            <div className="comment_time">1시간</div>
            <button className="comment_button">답글달기</button>
        </div>
    </div>


    )
}

export default Comment;