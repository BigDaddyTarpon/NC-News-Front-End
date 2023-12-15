import { useContext, useEffect, useState } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";
import { getAllArticles } from "../utils/api";
import { Link } from "react-router-dom";

function Articles({ topic }) {
  const [articles, setArticles] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getAllArticles(topic)
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  if (loading) {
    return <p>Loading articles! Please wait a moment.</p>;
  }
  if (error) {
    return <p>error!</p>;
  }

  return (
    <>
      <h2> 
        {" "}
        There are currently {articles.length} articles,  here is a summary of
        each.
      </h2>
      <h3>Click one to focus on it and see the article!</h3>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="ListItemArticles">
              <Link to={`/articles/${article.article_id}`}>
                <p>Article Title: {article.title}</p>
                <p>
                  Topic: {article.topic} , Written by: {article.author}
                </p>
                <p>
                  It has {article.votes} votes, and {article.comment_count}{" "}
                  comments
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Articles;
//some are on {topic}