export default class Post {
  static create(postInfo) {
    return new Post(postInfo);
  }
  constructor(postInfo) {
    const {
      user_id = "",
      post_title = "",
      post_content = "",
      username = "",
      category_id = 0,
      latitude = 0,
      longitude = 0,
      hashtags = ""
    } = postInfo;

    this._id = user_id;
    this._post_title = post_title;
    this._post_content = post_content;
    this._username = username;
    this._category_id = category_id;
    this._latitude = latitude;
    this._longitude = longitude;
    this._hashtags = hashtags;
  }
}
