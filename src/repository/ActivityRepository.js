import { api } from "../context/serverContext";

export const ApiGetActivityMyContentList = async (param) => {
    return await api({
        url: `/cms/activity/mycontentlist.do`,
        type: "get",
        param
    });
}
export const ApiGetActivityMyLikeListList = async (param) => {
    return await api({
        url: `/cms/activity/mylikelist.do`,
        type: "get",
        param
    });
}
export const ApiGetActivityMyCommentListList = async (param) => {
    return await api({
        url: `/cms/activity/mycommentlist.do`,
        type: "get",
        param
    });
}
export const ApiGetActivityMyListCount = async (param) => {
    console.log(param);
    return await api({
        url: `/cms/activity/mycount.do?userid=${param.userid}`,
        type: "get",
        param
        
    });
}
