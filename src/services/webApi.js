import Axios from "axios";

// CREATE
export const SystemResidenceAPI = Axios.create({
    baseURL: "http://localhost:8080",
});