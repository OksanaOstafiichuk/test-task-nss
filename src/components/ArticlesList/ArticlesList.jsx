import { useLocation } from "react-router-dom";
import { ArticleLink, List, Item } from "./ArticlesList.styled";

export const ArticlesList = ({ articles }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {articles.map((article) => {
          const sentence = article.split(". ");
          const index = articles.indexOf(article);

          return (
            <Item key={index}>
              <ArticleLink to={`articles/${index}`} state={{ from: location }}>
                {sentence[0]}
              </ArticleLink>
            </Item>
          );
        })}
      </List>
    </>
  );
};
