import { API_URLS, BASE_URL } from "../../appUrls";
import ACTION_TYPE from "../actionTypes";
import { headers, myHeaders } from "../../utils/myHeaders";
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
        payload: data.article
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
        payload: data.articles
      });
    })
    .catch(error => {
      toast.error(error, { autoClose: 3500, hideProgressBar: true });
    });
};

export const retrieveAllArticles = (url) => dispatch => {
  return axios
    .get(url, {
      headers: myHeaders
    })
    .then(res => {
      const fetchall = {
        type: ACTION_TYPE.VIEW_ARTICLES,
        payload: res.data.articles
      };
      dispatch(fetchall);
      localStorage.setItem("hasLiked", false);
      localStorage.setItem("hasDisLiked", false);
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
        type: ACTION_TYPE.VIEW_ONE_ARTICLE,
        payload: res.data.article
      });
    })
    .catch(error => {
      toast.error(error, { autoClose: 3500, hideProgressBar: true });
    });
};

export const shareArticle = (email, slug) => async dispatch => {
  return await axios
    .post(BASE_URL + `/api/articles/${slug}/share/`, email, headers())
    .then(res => {
      toast.success(`${res.data.share.message} with ${res.data.share.email}`, {
        autoClose: 3500,
        hideProgressBar: true
      });
      dispatch({
        type: ACTION_TYPE.SHARE_ARTICLE
      });
    })
    .catch(error => {
      toast.error(error, { autoClose: 3500, hideProgressBar: true });
    });
};

export const getPublishedArticles = () => dispatch => {
  return axios
    .get(API_URLS.PUBLISHED_ARTICLES, headers())
    .then(res => {
      dispatch({
        type: ACTION_TYPE.PUBLISHED_ARTICLES,
        payload: res.data.articles
      });
    })
    .catch(error => {
      toast.error(error, { autoClose: 3500, hideProgressBar: true });
    });
};

export const getDraftArticles = () => dispatch => {
  return axios
    .get(API_URLS.DRAFTED_ARTICLES, headers())
    .then(res => {
      dispatch({
        type: ACTION_TYPE.DRAFTED_ARTICLES,
        payload: res.data.articles
      });
    })
    .catch(error => {
      toast.error(error, { autoClose: 3500, hideProgressBar: true });
    });
};

export const deleteOneArticle = slug => dispatch => {
  return axios
    .delete(BASE_URL + `/api/articles/${slug}/`, headers())
    .then(res => {
      toast.success("Article Deleted Succesfully", {
        autoClose: 3500,
        hideProgressBar: true
      });
      dispatch({
        type: ACTION_TYPE.DELETE_ONE_ARTICLE,
        payload: res.data
      });
    })
    .catch(error => {
      toast.error(error, { autoClose: 3500, hideProgressBar: true });
    });
};

export const retrieveArticlesUnderTag = tag_name => dispatch => {
  return axios
    .get(BASE_URL + `/api/tags/${tag_name}/`, {
      headers: myHeaders
    })
    .then(res => {
      const allArticlesUnderTag = {
        type: ACTION_TYPE.VIEW_ARTICLES_UNDER_TAG,
        payload: res.data.articles
      };
      dispatch(allArticlesUnderTag);
    })
    .catch(error => {
      toast.error(error, { autoClose: 3500, hideProgressBar: true });
    });
};
