import React from 'react';
import './Comment.scss';

function commentCreate (){

    return(
        <div className="create_container">
            <input className="create_content" autoFocus placeholder="댓글을 입력하세요" />
        </div>
    )
}

export default commentCreate;