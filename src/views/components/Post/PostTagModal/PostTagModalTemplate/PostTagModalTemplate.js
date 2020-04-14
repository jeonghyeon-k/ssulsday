import React, { useState } from "react";
import styles from "./PostTagModalTemplate.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import PostTagModalInput from "../PostTagModalInput";
import PostTagModalList from "../PostTagModalList";
import PostModalHeader from "../../PostModalHeader";

const cx = classNames.bind(styles);

const PostTagModalTemplate = ({ ...props }) => {
  const [tags, setTags] = useState([
    "슬픔",
    "이별장소",
    "추억",
    "헤어짐",
    "이상형",
    "고백장소",
    "공개고백",
    "문자로 고백"
  ]);
  const [filteredTagValue, setFilteredTagValue] = useState("");

  let filteredTags = tags.filter(val => val.includes(filteredTagValue));

  return (
    <div className={cx("modal__wrapper")}>
      <PostModalHeader setIsTagModal={props.setIsTagModal}>
        태그추가
      </PostModalHeader>
      <PostTagModalInput setFilteredTagValue={setFilteredTagValue} />
      <PostTagModalList handleAddTag={props.handleAddTag} tags={filteredTags} />
    </div>
  );
};

PostTagModalTemplate.propTypes = {
  handleAddTag: PropTypes.func
};

PostTagModalTemplate.defaultProps = {
  handleAddTag: () => {
    console.log("handleAddTag is null");
  }
};

export default PostTagModalTemplate;
