import { FC } from "react";
import { Post } from "../../api/getPosts";
import Row from "../row/row";
import styles from "./posts.module.css";

interface PostsProps {
  posts: Post[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {posts.map(({ id, title, body }) => (
        <Row key={id} data={{ id, title, body }} />
      ))}
    </div>
  );
};

export default Posts;
