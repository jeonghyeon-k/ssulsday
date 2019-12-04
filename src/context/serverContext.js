import Axios from "axios"
const SERVER_URL = process.env.REACT_APP_SERVER_URL || "";
const REST_API_KEY = process.env.REACT_APP_REST_API_KEY || "";
console.log(process.env.REACT_APP_SERVER_URL);
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