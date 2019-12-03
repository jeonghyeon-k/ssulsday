import Axios from "axios"
<<<<<<< HEAD
import { SERVER_URL } from "../config/serverConfig"
=======
const SERVER_URL = process.env.REACT_APP_SERVER_URL || "";
const REST_API_KEY = process.env.REACT_APP_REST_API_KEY || "";
<<<<<<< HEAD
>>>>>>> af8fb6c... [master]/chore env 파일 생성

=======
console.log(process.env.REACT_APP_SERVER_URL);
>>>>>>> 5c01062... no message
export const api = ({url, type = "get", param}) => {
    return Axios({
        method: type,
        url: `${SERVER_URL}${url}`,
        data: param,
    })
}