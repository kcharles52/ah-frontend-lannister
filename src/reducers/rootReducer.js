import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer/articleReducer";
import userReducer from "../reducers/authReducers/socialAuthReducer";
import passwordResetReducer from "./authReducers/passwordResetReducer";
import simpleReducer from "./simpleReducer";
import registerReducer from "./authReducers/registerReducer";

const reducers = combineReducers({
  simpleReducer,
  articlesReducer,
  userReducer,
  passwordResetReducer,
  registerReducer
});

export default reducers;
