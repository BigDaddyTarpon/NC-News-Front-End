import { useContext, useEffect, useState } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";
import { getAllTopics } from "../utils/api";
import { Link, useSearchParams } from "react-router-dom";
import popSound from "../assets/popSound.mp3";
import { MuteModeContext } from "../contexts/MuteModeContext";
import { DarkModeContext } from "../contexts/DarkModeContext";

function Topics() {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [toDisplay, setToDisplay] = useState("topics");
  const { muteMode, setMuteMode } = useContext(MuteModeContext);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user, setUser } = useContext(UserContext);

  function popwithselecttopic(topic) {
    muteMode=== "soundon" ? new Audio(popSound).play() : null;
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
        <h2 className={`h2-${darkMode}`}>
          There are currently {topics.length} topics, here is a list of the
          available topics.
        </h2>
        <h3 className={`h3-${darkMode}`}>Click a topic to see the articles in that topic in the App!</h3>
        <p className={`h3-${darkMode}`}>
          Or share the link provided with friends via your favourite messaging
          App
        </p>
        <ul className={`ul-${darkMode}`}>
          {topics.map((topic, index) => {
            return (
              <Link to={`/articles?topic=${topic.slug}`}>
                <li key={index.toString()} className={`ListItemTopics-${darkMode}`}>
                  <p className="ListItemInnerTopics">
                    Topic Title: {topic.slug}
                  </p>
                  <p className="ListItemInnerTopics">
                    Topic description: {topic.description}
                  </p>
                  <p className="ListItemInnerTopics">
                    A sharable link to only load the articles on this topics is;
                  </p>
                  <p className="ListItemInnerTopics">{`https://steves-nc-news-project.onrender.com/api/articles?topic=${topic.slug}`}</p>
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
