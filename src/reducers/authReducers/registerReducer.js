import { REGISTER_USER } from "../../actions/actionTypes";

export const initialState = {
  user:{}
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
  case REGISTER_USER:
    return {
      ...state,
      user: action.payload
    };
  default:
    return state;
  }
}
