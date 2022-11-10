import Axios from "axios";

// CREATE
export const SystemResidenceAPI = Axios.create({
    baseURL: "https://api-system-residence-dsn.herokuapp.com",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});

// RESPONSES
SystemResidenceAPI.interceptors.response.use(
    (response) => {
        if (response && response.hasOwnProperty("data") && response.data.hasOwnProperty("data")) return response.data.data;
        if (response && response.hasOwnProperty("data")) return response.data;
        return response;
    }
)