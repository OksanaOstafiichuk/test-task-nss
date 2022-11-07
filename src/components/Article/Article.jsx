import { useParams } from "react-router-dom";

import { Text } from "./Article.styled";

export const Article = ({ articles }) => {
  const { articleId } = useParams();

  return <Text>{articles[articleId]}</Text>;
};
