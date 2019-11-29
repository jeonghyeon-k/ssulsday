import { api } from "../utils/api"

export const ApiSendContact = async (param) => {
    return await api({
        url: `/cms/contact/send_action.do`,
        type: "post",
        param
    });
}