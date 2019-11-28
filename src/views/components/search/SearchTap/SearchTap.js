import React from "react";
import PropTypes from "prop-types";
import TapButton from "../../TapButton/TapButton";

const SearchTap = ({ ...props }) => {
  return (
    <>
      <TapButton
        isToggle={props.selected === "favorite" ? true : false}
        setSelected={props.setSelected}
        val="favorite"
      >
        인기
      </TapButton>
      <TapButton
        isToggle={props.selected === "tag" ? true : false}
        setSelected={props.setSelected}
        val="tag"
      >
        태그
      </TapButton>
      <TapButton
        isToggle={props.selected === "place" ? true : false}
        setSelected={props.setSelected}
        val="place"
      >
        장소
      </TapButton>
    </>
  );
};

SearchTap.propTypes = {
  selected: PropTypes.string,
  setSelected: PropTypes.func
};

SearchTap.defaultProps = {
  selected: "favorite",
  setSelected: () => {
    console.log("setSelected is null");
  }
};

export default SearchTap;
