import { useSelector } from "react-redux";
import { selectPageNumber, selectPosts } from "../../store/posts-reducer";
import styles from "./post-navigate.module.css";
import { POSTS_ON_PAGE } from "../post-page/post-page";
import PageIndicator from "../page-indicator/page-indicator";
import useNavigatePosts from "../../hooks/useNavigatePosts";

const PostsNavigate = () => {
  const pageNumber = useSelector(selectPageNumber);
  const posts = useSelector(selectPosts);
  const countPages = Math.ceil(posts.length / POSTS_ON_PAGE);
  const { nextPage, prevPage } = useNavigatePosts("/", pageNumber, countPages);

  return (
    <div className={styles.navigate}>
      <button
        type="button"
        disabled={pageNumber <= 1}
        onClick={prevPage}
      >{`Назад`}</button>
      <PageIndicator countPages={countPages} currentPage={pageNumber} />
      <button
        onClick={nextPage}
        type="button"
        disabled={pageNumber >= countPages}
      >
        {`Далее`}
      </button>
    </div>
  );
};

export default PostsNavigate;
