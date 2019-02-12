import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import { errors } from "./AuthReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  errors
});

export default rootReducer;
