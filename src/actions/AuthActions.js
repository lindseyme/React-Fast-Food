import { GET_ERRORS } from "../constants/ActionTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_HOST_URL = process.env.API_URL;
export const registerUser = (userData, history) => dispatch => {
  return fetch(`${API_HOST_URL}auth/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    CORS: "no-cors",
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === "failed") {
        toast.error(data.message);
      } else {
        history.push("/");
      }
    });
};

export const loginUser = (userData, history) => dispatch => {
  return fetch(`${API_HOST_URL}auth/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    CORS: 'no-cors',
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === "failed") {
        return dispatch({
          type: GET_ERRORS,
          payload: data.message
        });
      } else {
        let token = data.auth_token;
        localStorage.setItem('token', token);
        window.location = '/menu';
        return true;
      }
    });
};
