import ACTION_TYPE from "../actionTypes";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URLS } from "../../appUrls/index";

const token = localStorage.getItem("token");

export const bookmarkArticle = slug => dispatch => {
  const CALL_URL = API_URLS.CREATE_BOOKMARK + `${slug}/bookmark/`;
  axios
    .post(CALL_URL,{}, {
      headers: { Authorization: `token ${token}` }
    })
    .then(response => {
      toast.success("Bookmarked!", {
        autoClose: 3500,
        hideProgressBar: true
      });
      dispatch({
        type: ACTION_TYPE.BOOKMARK_ARTICLE,
        payload: response.data
      });
    });
};

export const unBookmarkArticle = slug => dispatch => {
  const CALL_URL = API_URLS.CREATE_BOOKMARK + `${slug}/unbookmark/`;
  axios
    .delete(CALL_URL, {
      headers: { Authorization: `token ${token}` }
    })
    .then(() => {
      toast.success("Unbookmarked!", {
        autoClose: 3500,
        hideProgressBar: true
      });
      dispatch({
        type: ACTION_TYPE.UNBOOKMARK_ARTICLE,
        payload: slug
      });
    });
};

export const getBookmarks = () => dispatch => {
  axios
    .get(API_URLS.FETCH_BOOKMARKS, {
      headers: { Authorization: `token ${token}` }
    })
    .then(response => {
      dispatch({
        type: ACTION_TYPE.GET_BOOKMARKS,
        payload: response.data.bookmarks
      });
    });

};
