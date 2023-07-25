import { FC } from "react";
import Posts from "../Posts/posts";
import { useSort } from "../../hooks/useSort";
import { Post } from "../../api/getPosts";
import useSearchPosts from "../../hooks/useSearchPosts";

interface SortedPostsProps {
  posts: Post[];
}

const SortedPosts: FC<SortedPostsProps> = ({ posts }) => {
  const searchedPosts = useSearchPosts(posts);
  const sortedPosts = useSort(searchedPosts);

  return <Posts posts={sortedPosts} />;
};

export default SortedPosts;
