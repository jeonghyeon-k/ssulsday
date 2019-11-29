// "comment_id": 1,
// "user_id": "j_9758@naver.com",
// "username": "엘사공주님",
// "post_id": 1,
// "comment_write_time": "2019-11-20 11:23:37.0",
// "comment_content": "힘내세요!!"
export default class Comment {
    static create(commentInfo) {
        return new Comment(commentInfo);
    }
    constructor(commentInfo){
        const {
            commentId = 0,
            userId = 0,
            userName = "",
            postId = 0,
            commentWriteTime = "",
            commentContent = "",
        } = commentInfo;
        this._commentId = commentId;
        this._userId = userId;
        this._userName = userName;
        this._postId = postId;
        this._commentWriteTime = commentWriteTime;
        this._commentContent = commentContent;
    }
}