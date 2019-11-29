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

    this.user_id = user_id;
    this.post_title = post_title;
    this.post_content = post_content;
    this.username = username;
    this.category_id = category_id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.hashtags = hashtags;
  }
}
