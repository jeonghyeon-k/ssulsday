import { api } from "../utils/api"

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
        url: `/cms/activity/mycontentlist.do`,
        type: "get",
        param
    });
}
