import axios from "axios";
const BASE_URL = "http://localhost:8000";

const getTokenFromLocalStorage = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

export const config = {
  headers: {
    Authorization:
      getTokenFromLocalStorage !== null
        ? `Bearer ${getTokenFromLocalStorage}`
        : " ",
    Accept: "application/json",
  },
};
export default axios.create({
  baseURL: BASE_URL,
});
