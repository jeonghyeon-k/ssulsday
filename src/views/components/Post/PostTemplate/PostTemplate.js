import React, { useState, useEffect } from "react";
import PostTitle from "../PostTitle/PostTitle";
import PostCategory from "../PostCategory/PostCategory";
import PostTextArea from "../PostTextArea/PostTextArea";
import PostTag from "../PostTag";
import PostPlace from "../PostPlace";
import PostCategoryModal from "../PostCategoryModal";
import PostTagModalTemplate from "../PostTagModal/PostTagModalTemplate";
import PostPlaceModalTemplate from "../PostPlaceModal/PostPlaceModalTemplate";

import {
  ApiGetPostList,
  ApiPostPost
} from "../../../../repository/PostRepository";

import Post from "../../../../domain/Post";

const PostTemplate = () => {
  useEffect(() => {
    ApiGetPostList().then(data => {
      console.log(data.data);
    });
  });
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState(1);
  const [kind, setKind] = useState("고백썰");
  const [isCategoryModal, setisCategoryModal] = useState(false);
  const [isTagModal, setIsTagModal] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isPlaceModal, setIsPlaceModal] = useState(false);

  const postinfooo = {
    category_id: 2,
    hashtags: ["고백"],
    latitude: 0,
    longitude: 0,
    post_content:
      "안녕하세요~평소에 맘에 드는 사람이 있어서 고백했어요~과연 잘 될까요~잘됐으면 좋겠네요",
    post_title: "고백했어요",
    user_id: "beaaa0410@gmail.com",
    username: "도토리"
  };
  const handlePost = () => {
    const postinfo = {
      user_id: "beaaa0410@gmail.com",
      username: "도토리",
      post_title: "고백했어요",
      category_id: categoryId,
      post_content:
        "안녕하세요~평소에 맘에 드는 사람이 있어서 고백했어요~과연 잘 될까요~잘됐으면 좋겠네요",

      hashtags: selectedTags,
      latitude: 0,
      loggitude: 0
    };
    const post = new Post(postinfo);
    ApiPostPost(post).then(data => {
      console.log(data);
    });
  };
  const handleCategoryModal = () => {
    setisCategoryModal(!isCategoryModal);
  };

  const handleTagModal = () => {
    setIsTagModal(!isTagModal);
  };

  const handleAddTag = value => {
    setIsTagModal(!isTagModal);
    setSelectedTags(selectedTags.concat(value));
  };

  const handlePlaceModal = () => {
    setIsPlaceModal(!isPlaceModal);
  };

  const handleAddPlace = () => {
    setIsPlaceModal(!isPlaceModal);
  };

  return (
    <div>
      <button onClick={handlePost()}>제출</button>
      <PostTitle />
      <PostCategory
        kind={kind}
        setKind={setKind}
        handleCategoryModal={handleCategoryModal}
        isCategoryModal={isCategoryModal}
      />
      <PostTextArea />
      <PostTag handleTagModal={handleTagModal} selectedTags={selectedTags} />
      <PostPlace handlePlaceModal={handlePlaceModal} />
      {isCategoryModal && (
        <PostCategoryModal
          handleCategoryModal={handleCategoryModal}
          setKind={setKind}
        />
      )}
      {isTagModal && <PostTagModalTemplate handleAddTag={handleAddTag} />}
      {isPlaceModal && (
        <PostPlaceModalTemplate handleAddPlace={handleAddPlace} />
      )}
    </div>
  );
};

export default PostTemplate;
