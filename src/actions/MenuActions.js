import { GET_MENU } from "../constants/ActionTypes";
import "react-toastify/dist/ReactToastify.css";

const token = window.localStorage.getItem('token');
const API_HOST_URL = process.env.API_URL;
export const menuPage = (url = undefined) => dispatch => {

  let path = url;
  if (!path) {
    path = `${API_HOST_URL}menu`;
  }
  return fetch(path, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: GET_MENU,
        payload: data.message
      });
    });
};
