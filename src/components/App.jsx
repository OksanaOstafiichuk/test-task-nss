import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { GrArticle } from "react-icons/gr";

import { ArticlesList } from "./ArticlesList/ArticlesList";
import { Article } from "./Article/Article";
import { LoadMore } from "./LoadMore/LoadMore";

import * as API from "../service/api-service";

import { Container, AppBar, Title } from "./App.styled";

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [paras, setParas] = useState(5);

  useEffect(() => {
    API.fetchArticles(paras)
      .then(({ data }) => {
        setArticles((prevState) => [...prevState, ...data]);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [paras]);

  const loadMore = () => {
    setParas((prevState) => prevState + 5);
  };

  return (
    <Container>
      <AppBar>
        <GrArticle size="120px" />
        <Title>Articles</Title>
      </AppBar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ArticlesList articles={articles} />{" "}
              <LoadMore onClick={loadMore} />
            </>
          }
        />
        <Route
          path="articles/:articleId"
          element={<Article articles={articles} />}
        />
      </Routes>
    </Container>
  );
};
