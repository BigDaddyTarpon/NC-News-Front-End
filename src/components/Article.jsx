import { useParams } from 'react-router-dom'
import { getArticleById } from '../utils/api';
import { useContext, useEffect, useState } from "react";
import popSound from "../assets/popSound.mp3";
import { Link } from "react-router-dom";

function popwithcomments() {
  new Audio(popSound).play();
  
  //to add vote functionality
}
function popwithupvote() {
  new Audio(popSound).play();
  
  //to add vote functionality
}
function popwithdownvote() {
  new Audio(popSound).play();
  
  //to add vote functionality
}


function Article () {
const { article_id } = useParams();
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const [article, setArticle] = useState('');


useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        setArticle(data)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  if (loading) {
    return <h2>Loading the article with ID {article_id}! Please wait a moment.</h2>;
  }
  if (error) {
    return <p>error!</p>;
  }

  

return(<div className="articleCard">
    <h2 >{article.title}</h2>
    <p className='ArticleCardBodyText'>written by {article.author}, on the topic of; {article.topic}.</p>
    <p className='ArticleCardBodyText'> Total votes {article.votes}, and there are {article.comment_count} comments</p>
    <img src={article.article_img_url} alt="an image relating to the topic" />
    <p>{article.body}</p>
    <nav className="article-button-container">
      <button id="red-button" onClick={popwithupvote}> upvote </button>
      <button id="white-button" onClick={popwithcomments}><Link to="/Comments"> view the comments</Link></button>
      <button id="blue-button" onClick={popwithdownvote}>downvote</button>
    </nav>
    </div>
)
}

export default Article