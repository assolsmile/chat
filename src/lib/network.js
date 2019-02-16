import axios from "axios";
import config from "../config";

// Default axios instance with api url and spinner
const axiosDefaultConfig = {
  baseURL: config.apiUrl
};

export const axiosDefault = axios.create(axiosDefaultConfig);
