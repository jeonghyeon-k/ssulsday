import { api } from "../utils/api"

export const ApiGetPostList = async () => {
    return await api({
        url: `/cms/post/list.do/`,
        type: "get",
    });
}
export const ApiGetPostById = async (param) => {
    return await api({
        url: `/cms/post/view.do/${param.id}`,
        type: "get",
        param
    });
}
export const ApiPostPost = async (param) => {
    return await api({
        url: `/cms/post/reg_action.do`,
        type: "post",
        param
    });
}
export const ApiDeletePost = async (param) => {
    return await api({
        url: `/cms/post/del_action.do`,
        type: "delete",
        param
    });
}
export const ApiPutPost = async (param) => {
    return await api({
        url: `/cms/post/edit_action.do`,
        type: "put",
        param
    });
}
