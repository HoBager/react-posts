import { FC } from "react";
import { Post } from "../../api/getPosts";
import { useSelector } from "react-redux";
import { selectPageNumber } from "../../store/posts-reducer";
import SortedPosts from "../sorted-posts/sorted-posts";

interface PostPageProps {
  posts: Post[];
}

export const POSTS_ON_PAGE = 10;

function getPage(films: Post[], pageNumber: number) {
  const start = (pageNumber - 1) * POSTS_ON_PAGE;
  const end = start + POSTS_ON_PAGE;
  return films.slice(start, end);
}

const PostPage: FC<PostPageProps> = ({ posts }) => {
  const pageNumber = useSelector(selectPageNumber);
  const page = getPage(posts, pageNumber);
  return <SortedPosts posts={page} />;
};

export default PostPage;
