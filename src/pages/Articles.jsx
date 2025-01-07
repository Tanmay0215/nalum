import { useParams } from "react-router-dom";
import articles from "../../articles.json";

const Articles = () => {
  const id = useParams();

  return (
    <div>
      <h1>Articles</h1>
      <p>{articles.articles[id.id].title}</p>
    </div>
  );
};

export default Articles;
