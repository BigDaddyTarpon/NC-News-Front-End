import { useContext, useEffect, useState } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";
import { getAllTopics } from "../utils/api";
import { Link } from "react-router-dom";
 

function Topics() {
  //return <h2> Topics will be coming soon!</h2>;

  const [topics, setTopics] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getAllTopics()
      .then((data) => {
        setTopics(data.topics);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  if (loading) {
    return <p>Loading topics! Please wait a moment.</p>;
  }
  if (error) {
    return <p>error loading topics! Try again later</p>;
  }

  return (
    <>
      <h2>
        {" "}
        There are currently {topics.length} topics, here is a list of the
        available topics.
      </h2>
      <h3>Click a topic to see the articles in that topic in the App!</h3>
      <p>Or share the link provided with friends via your favourite messaging App</p>
      <ul>
        {topics.map((topic) => {
          return (
            <li key={topic.slug} className="ListItemTopics">
              {/* <Link to={`/articles/${article.article_id}`}> */}
              <p>Topic Title: {topic.slug}</p>
              <p>Topic description: {topic.description}</p>
              <p>A sharable link to only load the articles on this topics is;</p>
              <p>{`https://steves-nc-news-project.onrender.com/api/articles?${topic.slug}`}</p>
              {/* </Link> */}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Topics;
