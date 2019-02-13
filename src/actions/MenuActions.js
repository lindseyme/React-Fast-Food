import { GET_MENU_SUCCESS } from "../constants/ActionTypes";
import "react-toastify/dist/ReactToastify.css";

const token = window.localStorage.getItem("token");
const API_HOST_URL = process.env.API_URL;
export const menuPage = (url = undefined) => dispatch => {
  let path = url;
  if (!path) {
    path = `${API_HOST_URL}menu`;
  }
  console.log(path);
  return fetch(path, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-access-token": token
    },
    CORS: "no-cors"
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: GET_MENU_SUCCESS,
        payload: data.message
      });
    });
};
