import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import { errors } from "./AuthReducer";
import { menu } from './MenuReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  errors,
  menu
});

export default rootReducer;
