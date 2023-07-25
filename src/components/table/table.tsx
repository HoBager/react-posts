import styles from "./table.module.css";
import TableHead from "../head/table-head";
import usePosts from "../../hooks/usePosts";
import PostPage from "../post-page/post-page";
import PostsNavigate from "../post-navigate/posts-navigate";

const Table = () => {
  const posts = usePosts();

  return (
    <div className={styles.posts}>
      <div>
        <TableHead />
        <PostPage posts={posts} />
      </div>
      <PostsNavigate />
    </div>
  );
};

export default Table;
