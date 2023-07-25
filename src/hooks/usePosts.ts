import { useEffect } from "react";
import { Post, getPosts } from "../api/getPosts";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../store/posts-reducer";

export default function usePosts() {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts().then((data) =>
      dispatch({ type: "SET_POSTS", payload: data as Post[] })
    );
  }, []);

  return posts;
}
