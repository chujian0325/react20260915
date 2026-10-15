import { useSearchParams, useParams } from "react-router-dom";

const Article = () => {
  const [params] = useSearchParams();
  let id = params.get("id");

  const param2 = useParams();
  let id2 = param2.id
  return <div>Article{id}-{id2}</div>;
};

export default Article;