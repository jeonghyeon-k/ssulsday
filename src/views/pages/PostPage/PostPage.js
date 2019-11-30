import React from "react";
import PostTemplate from "../../components/Post/PostTemplate";

const PostPage = ({ ...props }) => {
  return <PostTemplate history={props.history} />;
};

export default PostPage;
