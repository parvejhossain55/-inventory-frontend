import axios from "axios";
import { getToken } from "../helper/helper";

// console.log("getToken ", getToken());

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export default instance;
