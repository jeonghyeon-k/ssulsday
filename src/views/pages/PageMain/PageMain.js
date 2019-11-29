import React, {useState, useEffect} from "react";
import {Layout, Icon} from "../../components"
import classNames from "classnames/bind";
import Hash from "../../components/Hash/Hash";
import { getCardList } from "../../../repository/CardRepository";
import PlaceCard from "../../components/PlaceCard/PlaceCard";
import CardView from "../../components/Card/CardView";
import {convertGeoToAddress} from "../../../context/serverContext";
import {ViewPage} from "./section";
// import PropTypes from "prop-types";

const getLocation = () => {

}
export default function PageMain (props) {
    const [userLocation, setUserLocation] = useState("위치를 가져올 수 없습니다.");
    const [locationList, setLocationList] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getCardList({searchCondition: "isLike"});
                const resLocationList = res.data;
                const dataLocationList = await Promise.all(resLocationList.map(async (el) => {
                    const resSpot = await convertGeoToAddress(el.longitude, el.latitude);
                    const dataSpot = await resSpot.data.documents[0].address.address_name;
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
                setLocationList(dataLocationList);
            } catch (e){
                console.log(e);
            } 
        }
        fetchData();
    }, []);
    function handleClickSearch(){
        props.history.push() // go searchPage
    }
    function handleClickSsulItem(id){
        props.history.push(id) // post detail id
    }
    function handleClickLocationItem(search){
        props.history.push(search) // search with search
    }
    function handleClickMoreSsul(){
        props.history.push() // go list
    }
    function handleClickLocation(){

    }
    return (
        <ViewPage
            userLocation={userLocation}
            locationList={locationList}
            handleClickSearch={handleClickSearch}
            handleClickLocationItem={handleClickLocationItem}
            handleClickSsulItem={handleClickSsulItem}
            handleClickMoreSsul={handleClickMoreSsul}
        />
    )
}