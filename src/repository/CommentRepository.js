import { api } from "../context/serverContext";

export const getCommentById = async (param) => {
    return await api({
        url: `/cms/comment/list.do/${param.id}`,
        type: "get",
    });
}
export const ApiPostComment = async (param) => {
    return await api({
        url: `/cms/comment/reg_action.do`,
        type: "post",
        param
    });
}
export const ApiDeleteComment = async (param) => {
    return await api({
        url: `/cms/comment/del_action.do`,
        type: "delete",
        param
    });
}
export const ApiPutComment = async (param) => {
    return await api({
        url: `/cms/comment/edit_action.do`,
        type: "put",
        param
    });
}