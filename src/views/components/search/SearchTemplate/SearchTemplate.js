import React, { useState } from "react";
import SearchInput from "../SearchInput";
import SearchTap from "../SearchTap";
import SearchList from "../SearchList";
const SearchTemplate = () => {
  const [selected, setSelected] = useState("favorite");
  const [tags, setTags] = useState([
    "행복한 날",
    "슬픔",
    "이별",
    "고백",
    "고백장소"
  ]);
  const [favorites, setFavorites] = useState([
    "행복한 날",
    "영등포구",
    "슬픔",
    "오목교역",
    "선유도역",
    "문래역",
    "영등포시장역",
    "신도림역",
    "대림역",
    "신길역"
  ]);
  const [places, setPlaces] = useState([
    "영등포구",
    "오목교역",
    "선유도역",
    "문래역",
    "영등포시장역",
    "신도림역",
    "대림역",
    "신길역"
  ]);
  return (
    <>
      <SearchInput />
      <SearchTap selected={selected} setSelected={setSelected} />
      <SearchList
        searchList={
          selected === "favorite"
            ? favorites
            : selected === "tag"
            ? tags
            : places
        }
      />
    </>
  );
};

export default SearchTemplate;
