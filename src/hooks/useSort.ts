import { useSelector } from "react-redux";
import { selectSort } from "../store/posts-reducer";
import { Post } from "../api/getPosts";

export const useSort = function (list: Post[]) {
  const { name, reverse } = useSelector(selectSort);

  if (!reverse) {
    return [...list.sort((a, b) => sortList(a[name], b[name]))];
  } else {
    return [...list.sort((a, b) => sortList(b[name], a[name]))];
  }
};

function sortList(a: string | number, b: string | number): number {
  if (Number(a) && Number(b)) {
    return Number(a) - Number(b);
  } else {
    return String(a).localeCompare(String(b));
  }
}
