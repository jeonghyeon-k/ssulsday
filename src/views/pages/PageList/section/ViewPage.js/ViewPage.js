import React from "react";
import styles from "./ViewPage.module.scss";
import classNames from "classnames/bind";
<<<<<<< HEAD
import {Layout, Icon} from "../../../../components"
import CardView from "../../../../components/Card/CardView";
=======
import { Layout, Icon } from "../../../../components";
import CardView from "../../../../components/Card/CardView";
import ListHeader from "../../../../components/ListHeader";
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455

const cx = classNames.bind(styles);

function renderTags(props) {
<<<<<<< HEAD
<<<<<<< HEAD
    const {dataTags, handleClickTag} = props;
return dataTags.map(el => <span className={cx("tag", {"tag--clicked":el.isSelected})} onClick={handleClickTag.bind(this, el.id)}>{el.text}</span>)
=======
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
  const { dataTags, handleClickTag } = props;
  return dataTags.map(el => (
    <span
      className={cx("tag", { "tag--clicked": el.isSelected })}
      onClick={handleClickTag.bind(this, el.id)}
    >
      {el.text}
    </span>
  ));
}
<<<<<<< HEAD
<<<<<<< HEAD
export default function ViewPage (props) {
    const {isSearch, cardList, sort,dataTags, handleClickTag, handleClickCard} = props;
    function handleClickUpdateSortModal(){

    }
    return (
        <Layout className={cx("page")} >
            <Layout.Header className={cx("header")}>
            <ListHeader />
                <div className={cx("tags")} >
    {isSearch && <span className={cx("tag","tag--clicked")} onClick={handleClickUpdateSortModal} >{sort.text}</span>}
                    {isSearch && renderTags({dataTags, handleClickTag})}
                </div>
            </Layout.Header>
            <Layout.Content>
                <div className={cx("list")} >
                        {
                         cardList.map(el => (
                            <div onClick={handleClickCard.bind(this, el.idx)} >
                                <CardView {...el} />
                            </div>
                        ))
                        }
                </div>
                 
            </Layout.Content>
        </Layout>
    )
>>>>>>> 8d548a6... [#40]/feat pagemain, list 헨들러 및 페이지 수정
=======
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
export default function ViewPage(props) {
  const {
    isSearch,
    cardList,
    sort,
    dataTags,
    handleClickTag,
    handleClickCard
  } = props;
  function handleClickUpdateSortModal() {}
  return (
    <Layout className={cx("page")}>
      <Layout.Header className={cx("header")}>
        <ListHeader history={props.history} />
        <div className={cx("tags")}>
          {isSearch && (
            <span
              className={cx("tag", "tag--clicked")}
              onClick={handleClickUpdateSortModal}
            >
              {sort.text}
            </span>
          )}
          {isSearch && renderTags({ dataTags, handleClickTag })}
        </div>
      </Layout.Header>
      <Layout.Content>
        <div className={cx("list")}>
          {cardList.map(el => (
            <div onClick={handleClickCard.bind(this, el.idx)}>
              <CardView {...el} />
            </div>
          ))}
        </div>
      </Layout.Content>
    </Layout>
  );
<<<<<<< HEAD
>>>>>>> 8404724... 검색 뒤로가기 키 활성화
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
=======
}
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
