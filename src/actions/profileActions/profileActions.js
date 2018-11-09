import ACTION_TYPE from "../actionTypes";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URLS } from "../../appUrls/index";

const token = localStorage.getItem("token");

export const getProfile = username => dispatch => {
  const profileURL = API_URLS.FETCH_PROFILE + username;
  axios
    .get(profileURL, { headers: { Authorization: `token ${token}` } })
    .then(response => {
      dispatch({
        type: ACTION_TYPE.GET_PROFILE,
        payload: response.data.profile
      });
    })
    .catch(error => {
      toast.error("Profile not found, check the username", {
        autoClose: 4500,
        hideProgressBar: true
      });
      return error;
    });
};

export const editProfile = (username, data) => dispatch => {
  const profileURL = API_URLS.EDIT_PROFILE + `${username}/`;
  axios
    .put(profileURL, data, { headers: { Authorization: `token ${token}` } })
    .then(response => {
      toast.success("Profile successfully updated", {
        autoClose: 4500,
        hideProgressBar: true
      });
      dispatch({
        type: ACTION_TYPE.EDIT_PROFILE,
        payload: response.data.profile
      });
    })
    .catch(error => {
      toast.error("You don't have rights to edit this profile", {
        autoClose: 4500,
        hideProgressBar: true
      });
      return error;
    });
};
