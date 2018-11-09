import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer/articleReducer";
import userReducer from "../reducers/authReducers/socialAuthReducer";
import passwordResetReducer from "./authReducers/passwordResetReducer";
import simpleReducer from "./simpleReducer";
import registerReducer from "./authReducers/registerReducer";
import commentReducer from "./commentReducer/commentReducer";
import rateReducer from "./articlesReducer/rateReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
  simpleReducer,
  articlesReducer,
  userReducer,
  passwordResetReducer,
  registerReducer,
  commentReducer,
  rateReducer,
  profileReducer
});

export default reducers;
