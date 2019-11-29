export default class Card {
    static create(postInfo) {
        return new Card(postInfo);
    }
    constructor(cardInfo){
        const {
            id = "",
            title = "",
            content = "",
            userId = "",
            categoryId = 0,
            latitude = 0,
            longitude = 0,
            hashtags = "",
        } = cardInfo;

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