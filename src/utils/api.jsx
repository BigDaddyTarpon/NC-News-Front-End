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

export const getCommentsByArticleID = (article_id) => {
  return api.get(`/api/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const incrementArticleVotes = (article_id, newVote) => {
  return api
    .patch(`/api/articles/${article_id}`, { inc_votes: newVote })
    .then((response) => {
      return response.data;
    });
};

export const addCommentToArticleByID = (article_id, newComment) => {
  return api
    .post(`/api/articles/${article_id}/comments`, newComment)
    .then((response) => {
      return response.data.comment;
    });
};

export const deleteCommentbyID = (comment_id) => {
  return api.delete(`/api/comments/${comment_id}`).then((response) => {
    return response;
  });
};

export const getAllTopics = () => {
  return api.get(`/api/topics`).then((response) => {
    return response.data;
  });
};
// , {params:{topic}}

export const getArticlesByTopic = (topic) => {
  return api
    .get(`/api/articles?topic=${topic}`)
    .then((response) => {
      return response.data;
    });
};