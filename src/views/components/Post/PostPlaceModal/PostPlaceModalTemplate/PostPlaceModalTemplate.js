import React, { useState } from "react";
import styles from "./PostPlaceModalTemplate.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import PostTagModalInput from "../../PostTagModal/PostTagModalInput/PostTagModalInput";
import PostPlaceModalList from "../PostPlaceModalList";
import PostModalHeader from "../../PostModalHeader";

const cx = classNames.bind(styles);

const PostPlaceModalTemplate = ({ ...props }) => {
  const [places, setPlaces] = useState([
    "영등포역",
    "영등포구",
    "영등포구청역",
    "오목교역",
    "선유도역",
    "문래역",
    "영등포시장역"
  ]);
  const [filteredPlaceValue, setFilteredPlaceValue] = useState("");

  let filteredPlaces = places.filter(val => val.includes(filteredPlaceValue));

  return (
    <div className={cx("modal__wrapper")}>
      <PostModalHeader setIsPlaceModal={props.setIsPlaceModal}>
        장소추가
      </PostModalHeader>{" "}
      <PostTagModalInput setFilteredPlaceValue={setFilteredPlaceValue} />
      <PostPlaceModalList
        handleAddPlace={props.handleAddPlace}
        places={filteredPlaces}
      />
    </div>
  );
};

PostPlaceModalTemplate.propTypes = {
  handleAddPlace: PropTypes.func
};

PostPlaceModalTemplate.defaultProps = {
  handleAddPlace: () => {
    console.log("handleAddPlace is null");
  }
};

export default PostPlaceModalTemplate;
