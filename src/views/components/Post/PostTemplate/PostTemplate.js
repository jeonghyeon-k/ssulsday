import React, { useState } from "react";
import PostTitle from "../PostTitle/PostTitle";
import PostCategory from "../PostCategory/PostCategory";
import PostTextArea from "../PostTextArea/PostTextArea";
import PostTag from "../PostTag";
import PostPlace from "../PostPlace";
import PostCategoryModal from "../PostCategoryModal";
import PostTagModalTemplate from "../PostTagModal/PostTagModalTemplate";
import PostPlaceModalTemplate from "../PostPlaceModal/PostPlaceModalTemplate";

const PostTemplate = () => {
  const [kind, setKind] = useState("고백썰");
  const [isCategoryModal, setisCategoryModal] = useState(false);
  const [isTagModal, setIsTagModal] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isPlaceModal, setIsPlaceModal] = useState(false);
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
      <PostTitle />
      <PostCategory
        kind={kind}
        setKind={setKind}
        handleCategoryModal={handleCategoryModal}
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
