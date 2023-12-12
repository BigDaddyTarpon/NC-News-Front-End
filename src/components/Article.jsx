import { useParams } from 'react-router-dom'
import { getArticleById } from '../utils/api';
import { useContext, useEffect, useState } from "react";

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
    <h2>{article.title}</h2>
    <p>written by {article.author}, on the topic of; {article.topic}.</p>
    <p> Total votes {article.votes}, and there are {article.comment_count} comments</p>
    <img src={article.article_img_url} alt="an image relating to the topic" />
    <p>{article.body}</p>
    
    </div>
)
}

export default Article