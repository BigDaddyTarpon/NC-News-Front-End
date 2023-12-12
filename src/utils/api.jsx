import axios from "axios";

const api = axios.create({
  baseURL: "https://steves-nc-news-project.onrender.com",
});

export const getUsers = () => {
  return api.get(`/api/users`).then((response) => {
    return response.data;
  });
};

export const getAllArticles = () => {
  return api.get(`/api/articles`).then((response) => {
    return response.data;
  });
};
export const getArticleById = (article_id) => {
  return api.get(`/api/articles/${article_id}`).then((response) => {
    return response.data.articles[0];
  });
};
