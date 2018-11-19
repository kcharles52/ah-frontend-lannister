import ACTION_TYPE from "../../actions/actionTypes";

let intialState = {
  bookmark: []
};

export default function bookmarkReducer(state = intialState, action) {
  switch (action.type) {
  case ACTION_TYPE.BOOKMARK_ARTICLE:
    return {
      ...state,
      bookmark: action.payload
    };
  case ACTION_TYPE.UNBOOKMARK_ARTICLE:
    return {
      ...state,
      bookmark: action.payload
    };
  case ACTION_TYPE.GET_BOOKMARKS:
    return {
      ...state,
      bookmark: action.payload
    };
  default:
    return state;
  }
}
