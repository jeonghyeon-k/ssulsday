import { api } from "../utils/api"

export const ApiPostLike = async (param) => {
    return await api({
        url: `/cms/like/reg_action.do`,
        type: "post",
        param
    });
}
export const ApiDeleteLike = async (param) => {
    return await api({
        url: `/cms/like/del_action.do`,
        type: "delete",
        param
    });
}