import React, { useState, useEffect } from "react";
import styles from "./ViewPage.module.scss";
import { Layout, Icon } from "../../../../components";
import Hash from "../../../../components/Hash/Hash";
import PlaceCard from "../../../../components/PlaceCard/PlaceCard";
import CardView from "../../../../components/Card/CardView";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const famousLocationList = [
  {
    spot: "강남역",
    stories: 1000,
    hashTags: "ㅗㅑ"
  },
  {
    spot: "강남역",
    stories: 1000,
    hashTags: "ㅗㅑ"
  },
  {
    spot: "강남역",
    stories: 1000,
    hashTags: "ㅗㅑ"
  },
  {
    spot: "강남역",
    stories: 1000,
    hashTags: "ㅗㅑ"
  },
  {
    spot: "강남역",
    stories: 1000,
    hashTags: "ㅗㅑ"
  }
];
export default function ViewPage(props) {
  const {
    userLocation,
    locationList,
    handleClickSearch,
    handleClickLocationItem,
    handleClickSsulItem,
    handleClickMoreSsul
  } = props;
  const [search, setSearch] = useState("이상형썰");
  const [isCategoryModal, setIsCategoryModal] = useState(false);

  function handleClickCategory() {
    setIsCategoryModal(!isCategoryModal);
  }
  return (
    <Layout className={cx("pageMain")}>
      <Layout.Header>
        <div className={cx("header")}>
          <div className={cx("logo")} />
        </div>
      </Layout.Header>
      <Layout.Content>
        <div className={cx("location")}>
          <Icon className={cx("icon")} type={"navi"} />
          <p className={cx("text")}>{userLocation}</p>
        </div>
        <div className={cx("search")}>
          <div>
            <p className={cx("text")}>내 근처의</p>
          </div>
          <div className={cx("row")}>
            <div className={cx("select")} onClick={handleClickCategory}>
              <p className={cx("select__text")}>{search}</p>
              <Icon type={"arrow-small"} className={cx("select__icon")} />
            </div>
            <p className={cx("text")}>을 읽고 싶어요</p>
            <div className={cx("button")} onClick={handleClickSearch}>
              <Icon type={"big-search"} />
            </div>
          </div>
        </div>
        <div className={cx("tags")}>
          <h5 className={cx("text")}>인기검색어</h5>
          <div className={cx("list")}>
            {["고백썰", "이별장소", "강남역"].map(el => (
              <Hash>{el}</Hash>
            ))}
          </div>
        </div>
        <div className={cx("locationList")}>
          <h5 className={cx("title")}>
            <span className={cx("color")}>인기있는 장소</span>는 어디인가요?
          </h5>
          <div className={cx("list")}>
            {famousLocationList.map(el => (
              <div onClick={handleClickLocationItem.bind(this, el.spot)}>
                <PlaceCard {...el} />
              </div>
            ))}
          </div>
        </div>
        <div className={cx("ssulList")}>
          <div className={cx("header")}>
            <div className={cx("title")}>
              <i className={cx("logo")} />
              <h5 className={cx("text")}>
                의 <span className={cx("color")}>인기썰</span>이 궁금해요
              </h5>
            </div>
            <span className={cx("more")} onClick={handleClickMoreSsul}>
              더보기
            </span>
          </div>
          <div className={cx("list")}>
            {locationList.map(el => (
              <div onClick={handleClickSsulItem.bind(this, el.idx)}>
                <CardView {...el} />
              </div>
            ))}
          </div>
        </div>
      </Layout.Content>
    </Layout>
  );
}
