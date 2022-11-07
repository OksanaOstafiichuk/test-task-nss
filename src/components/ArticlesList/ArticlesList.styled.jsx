import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArticleLink = styled(Link)`
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;

export const List = styled.ol`
  font-size: 24px;
`;

export const Item = styled.li`
  padding: 5px;
`;
