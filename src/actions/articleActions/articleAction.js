import { API_URLS, BASE_URL } from "../../appUrls";
import ACTION_TYPE from "../actionTypes";
import { myHeaders } from "../../utils/myHeaders";
import { toast } from "react-toastify";
import axios from "axios";

export const createNewArticleAction = article => dispatch => {
  return fetch(API_URLS.FETCH_CREATE_ARTICLES, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(article)
  })
    .then(response => {
      if (response.status !== 201) {
        toast.error("Article Not Drafted, check your fields", {
          autoClose: 3500,
          hideProgressBar: true
        });
      } else {
        toast.success("Article Succesfully Drafted", {
          autoClose: 3500,
          hideProgressBar: true
        });
      }
      return response.json();
    })
    .then(data => {
      dispatch({
        type: ACTION_TYPE.NEW_ARTICLE,
        payload: data.article,
      });
    })
    .catch(error => {
      toast.error(error, { autoClose: 3500, hideProgressBar: true });
    });
};

export const publishNewArticleAction = slug => dispatch => {
  return fetch(BASE_URL + `/api/articles/${slug}/publish/`, {
    method: "PUT",
    headers: myHeaders
  })
    .then(response => {
      if (response.status !== 201) {
        toast.error("Can't Publish, Draft first", {
          autoClose: 3500,
          hideProgressBar: true
        });
      } else {
        toast.success("Article Published Succesfully", {
          autoClose: 3500,
          hideProgressBar: true
        });
      }
      return response.json();
    })
    .then(data => {
      dispatch({
        type: ACTION_TYPE.PUBLISH_ARTICLE,
        payload: data
      });
    })
    .catch(error => {
      toast.error(error, { autoClose: 3500, hideProgressBar: true });
    });
};

export const retrieveAllArticles = () => dispatch => {
  return axios
    .get(API_URLS.FETCH_CREATE_ARTICLES, {
      headers: myHeaders
    })
    .then(res => {
      const fetchall = {
        type: ACTION_TYPE.VIEW_ARTICLES,
        payload: res.data.articles.results
      };
      dispatch(fetchall);
    })
    .catch(error => {
      toast.error(error, { autoClose: 3500, hideProgressBar: true });
    });
};

export const fetchOneArticle = slug => dispatch => {
  return axios
    .get(BASE_URL + `/api/articles/${slug}/`, {
      headers: myHeaders
    })
    .then(res => {
      dispatch({
        type:ACTION_TYPE.VIEW_ONE_ARTICLE,
        payload:res.data.article
      });
    })
    .catch(error =>{
      toast.error(error, { autoClose: 3500, hideProgressBar: true });
    });
};
