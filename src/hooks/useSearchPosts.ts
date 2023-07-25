import { useSelector } from "react-redux";
import { Post } from "../api/getPosts";
import { selectSortQuery } from "../store/posts-reducer";

export default function useSearchPosts(posts: Post[]) {
  const query = useSelector(selectSortQuery);
  return posts.filter(({ title, id, body }) =>
    [title, id, body].join("").includes(query)
  );
}
