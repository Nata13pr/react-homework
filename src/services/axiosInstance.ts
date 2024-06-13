import axios from "axios";
import {baseURL} from "../utils";

export const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {'Content-Type': 'application/json'},
})