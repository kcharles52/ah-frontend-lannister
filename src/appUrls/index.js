export const BASE_URL = "https://ah-backend-lannister-staging.herokuapp.com";

export const API_URLS = {
  FETCH_CREATE_ARTICLES: `${BASE_URL}/api/articles/`,
  PUBLISH_CREATE_ARTICLES: `${BASE_URL}/api/articles/{}/publish/`,
  FETCH_ARTICLE_CATEGORIES: `${BASE_URL}/api/categories/`,
  FETCH_PROFILE:`${BASE_URL}/api/profiles/`,
  EDIT_PROFILE:`${BASE_URL}/api/profiles/`,
};
export const LOGIN_URL = `${BASE_URL}/api/users/login/`;
