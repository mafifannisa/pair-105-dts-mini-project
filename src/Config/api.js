import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "136b3409abc441367012d44219caa6ce",
  },
});
