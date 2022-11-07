import { LoadMoreBtn } from "./LoadMore.styled";

export const LoadMore = ({ onClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load more
    </LoadMoreBtn>
  );
};
