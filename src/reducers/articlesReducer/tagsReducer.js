import ACTION_TYPE from "../../actions/actionTypes";

const initialState = {
  articles: [{ read_time: "00:00:00" }]
};

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_TYPE.VIEW_ARTICLES_UNDER_TAG:
    return {
      ...state,
      articles: action.payload
    };
  default:
    return state;
  }
};

export default tagsReducer;
