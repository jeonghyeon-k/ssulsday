import React from "react";
import styles from "./ViewPage.module.scss";
import classNames from "classnames/bind";
import {Layout, Icon} from "../../../../components"
import CardView from "../../../../components/Card/CardView";

const cx = classNames.bind(styles);

function renderTags(props) {
    const {dataTags, handleClickTag} = props;
return dataTags.map(el => <span className={cx("tag", {"tag--clicked":el.isSelected})} onClick={handleClickTag.bind(this, el.id)}>{el.text}</span>)
}
export default function ViewPage (props) {
    const {cardList, sort,dataTags, handleClickTag, handleClickCard} = props;
    function handleClickUpdateSortModal(){

    }
    return (
        <Layout className={cx("page")} >
            <Layout.Header className={cx("header")}>
                <h1>bar</h1>
                <div className={cx("tags")} >
    {<span className={cx("tag","tag--clicked")} onClick={handleClickUpdateSortModal} >{sort.text}</span>}
                    {renderTags({dataTags, handleClickTag})}
                </div>
            </Layout.Header>
            <Layout.Content>
                <div className={cx("list")} >
                         {
                         cardList.map(el => (
                            <div onClick={handleClickCard.bind(this, el.id)} >
                                <CardView {...el} />
                            </div>
                        ))
                        }
                </div>
                 
            </Layout.Content>
        </Layout>
    )
}