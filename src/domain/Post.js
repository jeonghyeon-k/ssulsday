export default class Post {
    static create(postInfo) {
        return new Post(postInfo);
    }
    constructor(postInfo){
        const {
            id = "",
            title = "",
            content = "",
            userId = "",
            categoryId = 0,
            latitude = 0,
            longitude = 0,
            hashtags = "",
        } = postInfo;

        this._id = id;
        this._title = title;
        this._content = content;
        this._userId = userId;
        this._categoryId = categoryId;
        this._latitude = latitude;
        this._longitude = longitude;
        this._hashtags = hashtags;
    }
}