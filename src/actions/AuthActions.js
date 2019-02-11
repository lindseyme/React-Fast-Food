import { GET_ERRORS } from "../constants/ActionTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_HOST_URL = process.env.API_URL;
export const registerUser = (userData, history) => dispatch => {
  fetch(`${API_HOST_URL}auth/signup`, {
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
        dispatch({
          type: GET_ERRORS,
          payload: data
        });
      } else {
        history.push("/login");
      }
    });
};
