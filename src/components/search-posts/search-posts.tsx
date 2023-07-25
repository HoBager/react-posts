import Search from "../search/search";
import { useDispatch } from "react-redux";

const SearchPosts = () => {
  const dispatch = useDispatch();
  const search = (value: string) =>
    dispatch({ type: "CHANGE_QUERY", payload: value });
  return <Search onSubmit={search} />;
};

export default SearchPosts;
