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

const PostTemplate = () => {
  useEffect(() => {
    ApiGetPostList().then(data => {
      console.log(data.data);
    });
  });
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState(1);
  const [content, setContent] = useState("");
  const [kind, setKind] = useState("고백썰");
  const [isCategoryModal, setisCategoryModal] = useState(false);
  const [isTagModal, setIsTagModal] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isPlaceModal, setIsPlaceModal] = useState(false);

  const handlePost = () => {
    const postinfo = {
      user_id: "beaaa0410@gmail.com",
      username: "도토리",
      post_title: title,
      category_id: categoryId,
      post_content: content,
      hashtags: selectedTags,
      latitude: 0,
      loggitude: 0
    };

    ApiPostPost(postinfo).then(data => {
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
  console.log(content);
  return (
    <div>
      <button onClick={handlePost}>제출</button>
      <PostTitle setTitle={setTitle} />
      <PostCategory
        kind={kind}
        setKind={setKind}
        handleCategoryModal={handleCategoryModal}
        isCategoryModal={isCategoryModal}
      />
      <PostTextArea setContent={setContent} />
      <PostTag handleTagModal={handleTagModal} selectedTags={selectedTags} />
      <PostPlace handlePlaceModal={handlePlaceModal} />
      {isCategoryModal && (
        <PostCategoryModal
          handleCategoryModal={handleCategoryModal}
          setCategoryId={setCategoryId}
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
