import { api } from "../utils/api"

export const ApiGetUserList = async (param) => {
    return await api({
        url: `/cms/user/list.do/`,
        type: "get",
        param
    });
}
export const ApiGetUserById = async (param) => {
    return await api({
        url: `/cms/user/view.do/${param.id}`,
        type: "get",
        param
    });
}
export const ApiPostUser = async (param) => {
    return await api({
        url: `/cms/user/reg_action.do`,
        type: "post",
        param
    });
}
export const ApiDeleteUser = async (param) => {
    return await api({
        url: `/cms/user/del_action.do`,
        type: "delete",
        param
    });
}
export const ApiPutUser = async (param) => {
    return await api({
        url: `/cms/user/edit_action.do`,
        type: "put",
        param
    });
}
export const ApiLogout = async () => {
    return await api({
        url: `/logout.do`,
        type: "get",
    });
}
export const ApiLogin = async (param) => {
    return await api({
        url: `/login_action.do`,
        type: "post",
        param
    });
}
