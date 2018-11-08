import { REGISTER_USER } from "../actionTypes";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://ah-backend-lannister-staging.herokuapp.com/api/users/";

export const signUpAction = userData => dispatch => {
  axios
    .post(API_URL, userData)
    .then(response => {
      toast.success("You have successfully registered, Please check you email for a verification link", {
        autoClose: 4500,
        hideProgressBar: true
      });

      dispatch({
        type: REGISTER_USER,
        payload: response.data
      });
    })
    .catch(error => {
      toast.error("You maybe having blank fields OR Email and Username are already taken", {
        autoClose: 4500,
        hideProgressBar: true
      });
      dispatch({
        type: REGISTER_USER,
        payload: error.response.data.errors
      });
    });
};
