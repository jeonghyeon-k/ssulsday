import Axios from "axios"
<<<<<<< HEAD
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
=======
const SERVER_URL = process.env.REACT_APP_SERVER_URL || "";
const REST_API_KEY = process.env.REACT_APP_REST_API_KEY || "";
console.log(process.env.REACT_APP_SERVER_URL);
<<<<<<< HEAD
>>>>>>> f25040b2071d69a125aec6f6920229b1ed02e1b5
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
>>>>>>> 30eb86ba6d791d236d98eb973ac55f802711e742
export const api = ({url, type = "get", param}) => {
    return Axios({
        method: type,
        url: `${SERVER_URL}${url}`,
        data: param,
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Access-Control-Allow-Headers": "Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization"
        }
    })
}
export const convertGeoToAddress = (x, y) => {
    return Axios({
        method: "get",
        url: `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${x}&y=${y}&input_coord=WGS84`,
        headers: {Authorization: `KakaoAK ${REST_API_KEY}`}
    })
}