import { useContext, useEffect, useState } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";
import { getAllTopics } from "../utils/api";
import { Link, useSearchParams } from "react-router-dom";
import popSound from "../assets/popSound.mp3";
import Articles from "./Articles";

function Topics() {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [toDisplay, setToDisplay] = useState("topics");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user, setUser } = useContext(UserContext);

  function popwithselecttopic(topic) {
    new Audio(popSound).play();
    setToDisplay(topic);
    setSelectedTopic(topic);
  }

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

  if (toDisplay === "topics") {
    return (
      <>
        <h2>
          There are currently {topics.length} topics, here is a list of the
          available topics.
        </h2>
        <h3>Click a topic to see the articles in that topic in the App!</h3>
        <p>
          Or share the link provided with friends via your favourite messaging
          App
        </p>
        <ul>
          {topics.map((topic, index) => {
            return (
              <Link to={`/articles?topic=${topic.slug}`}>
                <li key={index} className="ListItemTopics">
                  <p>Topic Title: {topic.slug}</p>
                  <p>Topic description: {topic.description}</p>
                  <p>
                    A sharable link to only load the articles on this topics is;
                  </p>
                  <p>{`https://steves-nc-news-project.onrender.com/api/articles?topic=${topic.slug}`}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Topics;
