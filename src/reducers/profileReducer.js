import ACTION_TYPE from "../actions/actionTypes";

export const initialState = {
  profile: {
    username: "",
    first_name: "",
    last_name: "",
    bio: "",
    image: "",
    number_of_articles: 0,
    app_notification_enabled: false,
    email_notification_enabled: false
  }
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
  case ACTION_TYPE.GET_PROFILE:
    return {
      ...state,
      profile: action.payload
    };
  case ACTION_TYPE.EDIT_PROFILE:
    return {
      ...state,
      profile: action.payload
    };
  default:
    return state;
  }
}
