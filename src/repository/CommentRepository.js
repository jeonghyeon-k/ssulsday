import { api } from "../utils/api";

export const getCommentById = async (param) => {
    return await api({
        url: `/cms/Comment/list.do/${param.id}`,
        type: "get",
    });
}
export const ApiPostComment = async (param) => {
    return await api({
        url: `/cms/Comment/reg_action.do`,
        type: "post",
        param
    });
}
export const ApiDeleteComment = async (param) => {
    return await api({
        url: `/cms/Comment/del_action.do`,
        type: "delete",
        param
    });
}
export const ApiPutComment = async (param) => {
    return await api({
        url: `/cms/Comment/edit_action.do`,
        type: "put",
        param
    });
}