import React, {useState, useEffect} from "react";
import ViewPage from "./section/ViewPage.js/ViewPage";
<<<<<<< HEAD
import {convertGeoToAddress} from "../../../context/serverContext";
<<<<<<< HEAD
import { getCardList } from "../../../repository/CardRepository";
import { isS } from "xmlchars/xml/1.0/ed5";
=======
import { getCardList, ApiCardByHashTag } from "../../../repository/CardRepository";
=======
import { convertGeoToAddress } from "../../../context/serverContext";
import {
  getCardList,
  ApiCardByHashTag
} from "../../../repository/CardRepository";
>>>>>>> 8404724... 검색 뒤로가기 키 활성화
import TapBar from "../../components/TapBar/TapBar";
>>>>>>> 8d548a6... [#40]/feat pagemain, list 헨들러 및 페이지 수정

const dataTags = [
    { id: 1, text: "고백썰", categoryId: 1, isSelected: false},
    { id: 2, text: "이별썰",  categoryId: 2, isSelected: false},
    {id: 3, text: "이상형썰", categoryId: 3, isSelected: false}
];

const sortList = [
    {
        text: "조회수순",
        key: "isView",
        id: 1
    },
    {
        text: "좋아요순",
        key: "isLike",
        id: 2
    },
    {
        text: "댓글순",
        key: "isComment",
        id: 3
    },
    {
        text: "최신순",
        key: "isNew",
        id: 4
    },
]
export default function PageList(props) {
<<<<<<< HEAD
    const [tags, setTags] = useState(dataTags);
    const [category, setCategory] = useState(1);
<<<<<<< HEAD
=======
    const [isSearch, setIsSearch] = useState(false);
>>>>>>> 8d548a6... [#40]/feat pagemain, list 헨들러 및 페이지 수정
    const [sort, setSort] = useState(sortList[0]);
    const [cardList, setCardList] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getCardList({searchCondition: sort.key, category_id: category});
                const resCardList = res.data;
                const dataCardList = await Promise.all(resCardList.map(async (el) => {
                    let dataSpot = "위치를 찾을 수 없습니다.";
                    if(el.longitude !== 0 && el.latitude !== 0) {
                        const resSpot = await convertGeoToAddress(el.longitude, el.latitude);
                        dataSpot = await resSpot.data.documents[0].address.address_name;
                    } 
                    return ({
                        idx: el.post_id,
                        title: el.card_title,
                        contents: el.card_content,
                        hashTags: el.hashTags,
                        spot: dataSpot,
                        date: el.time_created,
                        comentcounte: el.commentcount,
                        likecount: el.likecount,
                        viewcount: el.viewcount
                    })
                }));
                setCardList(dataCardList);
            } catch (e){
                console.log(e);
            } 
        }
<<<<<<< HEAD
        fetchData();
=======
        async function fetchDataWithSearch(search) {
            try {
                const res = await ApiCardByHashTag({searchKeyword: search});
                const resCardList = res.data;
                const dataCardList = await Promise.all(resCardList.map(async (el) => {
                    let dataSpot = "위치를 찾을 수 없습니다.";
                    if(el.longitude !== 0 && el.latitude !== 0) {
                        const resSpot = await convertGeoToAddress(el.longitude, el.latitude);
                        dataSpot = await resSpot.data.documents[0].address.address_name;
                    } 
                    return ({
                        idx: el.post_id,
                        title: el.card_title,
                        contents: el.card_content,
                        hashTags: el.hashTags,
                        spot: dataSpot,
                        date: el.time_created,
                        comentcounte: el.commentcount,
                        likecount: el.likecount,
                        viewcount: el.viewcount
                    })
                }));
                setCardList(dataCardList);
            } catch (e){
                console.log(e);
            } 
        }
        const search = props.location.search;
        const keyword = search.split("=")[1];
        if(keyword) {
            setIsSearch(true);
            fetchDataWithSearch(keyword);
        } else {
            setIsSearch(false);
            fetchData();
        }
        
>>>>>>> 8d548a6... [#40]/feat pagemain, list 헨들러 및 페이지 수정
    }, [tags, sort]);
    function handleClickTag (id) {
        const tempTags = tags.map(el => {
            return {...el, isSelected: false}
        })
        const sortTags = tempTags.map(el => {
           if (el.id === id) {
               return {...el, isSelected: true}
           } else {
               return el;
           }
        })
        setTags(sortTags)
<<<<<<< HEAD
    }
    function handleClickCard(id) {
        props.history.push()
    }
    function updateSort(sortId) {
        setSort(sort[sortId])
    }
    return (
        <ViewPage
=======
=======
  const [tags, setTags] = useState(dataTags);
  const [category, setCategory] = useState(1);
  const [isSearch, setIsSearch] = useState(false);
  const [sort, setSort] = useState(sortList[0]);
  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getCardList({
          searchCondition: sort.key,
          category_id: category
        });
        const resCardList = res.data;
        const dataCardList = await Promise.all(
          resCardList.map(async el => {
            let dataSpot = "위치를 찾을 수 없습니다.";
            if (el.longitude !== 0 && el.latitude !== 0) {
              const resSpot = await convertGeoToAddress(
                el.longitude,
                el.latitude
              );
              dataSpot = await resSpot.data.documents[0].address.address_name;
            }
            return {
              idx: el.post_id,
              title: el.card_title,
              contents: el.card_content,
              hashTags: el.hashTags,
              spot: dataSpot,
              date: el.time_created,
              comentcounte: el.commentcount,
              likecount: el.likecount,
              viewcount: el.viewcount
            };
          })
        );
        setCardList(dataCardList);
      } catch (e) {
        console.log(e);
      }
>>>>>>> 8404724... 검색 뒤로가기 키 활성화
    }
    async function fetchDataWithSearch(search) {
      try {
        const res = await ApiCardByHashTag({ searchKeyword: search });
        const resCardList = res.data;
        const dataCardList = await Promise.all(
          resCardList.map(async el => {
            let dataSpot = "위치를 찾을 수 없습니다.";
            if (el.longitude !== 0 && el.latitude !== 0) {
              const resSpot = await convertGeoToAddress(
                el.longitude,
                el.latitude
              );
              dataSpot = await resSpot.data.documents[0].address.address_name;
            }
            return {
              idx: el.post_id,
              title: el.card_title,
              contents: el.card_content,
              hashTags: el.hashTags,
              spot: dataSpot,
              date: el.time_created,
              comentcounte: el.commentcount,
              likecount: el.likecount,
              viewcount: el.viewcount
            };
          })
        );
        setCardList(dataCardList);
      } catch (e) {
        console.log(e);
      }
    }
    const search = props.location.search;
    const keyword = search.split("=")[1];
    if (keyword) {
      setIsSearch(true);
      fetchDataWithSearch(keyword);
    } else {
      setIsSearch(false);
      fetchData();
    }
  }, [tags, sort]);
  function handleClickTag(id) {
    const tempTags = tags.map(el => {
      return { ...el, isSelected: false };
    });
    const sortTags = tempTags.map(el => {
      if (el.id === id) {
        return { ...el, isSelected: true };
      } else {
        return el;
      }
    });
    setTags(sortTags);
  }
  function handleClickCard(id) {
    props.history.push(`/details/${id}`);
  }
  function updateSort(sortId) {
    setSort(sort[sortId]);
  }
  return (
    <>
      <ViewPage
        isSearch={isSearch}
<<<<<<< HEAD
>>>>>>> 8d548a6... [#40]/feat pagemain, list 헨들러 및 페이지 수정
         cardList={cardList}
         sort={sort}
         dataTags={tags}
         handleClickTag={handleClickTag}
         handleClickCard={handleClickCard}
         />
<<<<<<< HEAD
    )
}
=======
         <TapBar selected="list" />
        </>
    )
=======
        cardList={cardList}
        sort={sort}
        dataTags={tags}
        handleClickTag={handleClickTag}
        handleClickCard={handleClickCard}
        history={props.history}
      />
      <TapBar selected="list" />
    </>
  );
>>>>>>> 8404724... 검색 뒤로가기 키 활성화
}
>>>>>>> 8d548a6... [#40]/feat pagemain, list 헨들러 및 페이지 수정
