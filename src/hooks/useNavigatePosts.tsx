import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function useNavigatePosts(
  url: string,
  currentPage: number,
  countPages: number
) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navgate = useNavigate();

  useEffect(() => {
    if (Number(id) <= countPages && Number(id) >= 1) {
      dispatch({ type: "CHANGE_PAGE", payload: Number(id) });
    } else {
      dispatch({ type: "CHANGE_PAGE", payload: currentPage });
    }
  }, [id]);

  const nextPage = () => {
    const newPage = currentPage === countPages ? countPages : currentPage + 1;
    dispatch({ type: "CHANGE_PAGE", payload: newPage });
    navgate(`${url}${newPage}`);
  };
  const prevPage = () => {
    const newPage = currentPage === 1 ? currentPage : currentPage - 1;
    dispatch({ type: "CHANGE_PAGE", payload: newPage });
    navgate(`${url}${newPage}`);
  };
  return { nextPage, prevPage };
}
