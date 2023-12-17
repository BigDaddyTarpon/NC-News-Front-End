import { useContext, useEffect, useState } from "react";
import { UserContext, } from "../contexts/UserContext";
import { getAllArticles } from "../utils/api";
import { Link, useSearchParams } from "react-router-dom";
import ArticleOptionsNavbar from "./ArticleOptionsNavbar";
import { DarkModeContext } from "../contexts/DarkModeContext";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
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
    return <p>Loading articles! Please wait, this may take a while on the first load.</p>;
  }
  if (error) {
    return <p>error!</p>;
  }

  return (
    <div className={`articles-page-${darkMode}`}>
      <ArticleOptionsNavbar
        order={order}
        setOrder={setOrder}
        sort={sort}
        setSort={setSort}
      />
      <h2 className={`h2-${darkMode}`}>
        {" "}
        There are currently {articles.length} articles, here is a summary of
        each.
      </h2>
      <h3 className={`h3-${darkMode}`}>Click one to focus on it and see the article!</h3>
      <ul className={`ul-${darkMode}`}>
        {articles.map((article) => {
          return (
            <li key={article.article_id} className={`ListItemArticles-${darkMode}`}>
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
    </div>
  );
}

export default Articles;
