import Axios from "axios"
import { SERVER_URL } from "../config/serverConfig"

export const api = ({url, type = "get", param}) => {
    return Axios({
        method: type,
        url: `${SERVER_URL}${url}`,
        data: param,
    })
}