import { useContext, useEffect, useState } from "react";
import { UserContext, } from "../contexts/UserContext";
import { getAllArticles } from "../utils/api";
import { Link, useSearchParams } from "react-router-dom";
import ArticleOptionsNavbar from "./ArticleOptionsNavbar";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [order, setOrder] = useState("asc");
  const { user, setUser } = useContext(UserContext);
  const [sort, setSort] = useState(undefined);

  useEffect(() => {
    getAllArticles(topic, sort, order)
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, [topic, order, sort]);

  if (loading) {
    return <p>Loading articles! Please wait a moment.</p>;
  }
  if (error) {
    return <p>error!</p>;
  }

  return (
    <>
      <ArticleOptionsNavbar
        order={order}
        setOrder={setOrder}
        sort={sort}
        setSort={setSort}
      />
      <h2>
        {" "}
        There are currently {articles.length} articles, here is a summary of
        each.
      </h2>
      <h3>Click one to focus on it and see the article!</h3>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="ListItemArticles">
              <Link to={`/articles/${article.article_id}`}>
                <p className="ListItemInnerArticles">
                  Article Title: {article.title}
                </p>
                <p className="ListItemInnerArticles">
                  Topic: {article.topic} , Written by: {article.author}
                </p>
                <p className="ListItemInnerArticles">
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
