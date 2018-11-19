import ACTION_TYPE from "../actionTypes";
import axios from "axios";
// import { toast } from "react-toastify";
import { API_URLS } from "../../appUrls/index";

const token = localStorage.getItem("token");

export const getBookmarks = () => dispatch  => {
  axios
    .get(API_URLS.FETCH_BOOKMARKS, {
      headers: { Authorization: `token ${token}` }
    })
    .then(response => {
      dispatch({
        type: ACTION_TYPE.GET_BOOKMARKS,
        payload: response.data.bookmarks
      });
    })
    .catch(error => {
      throw error;
    });
};
