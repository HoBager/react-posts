import { Post } from "../api/getPosts";
import { Action } from "./store";

export enum SortsName {
  "ID" = "id",
  "Заголовок" = "title",
  "Описание" = "body",
  id = "ID",
  title = "Заголовок",
  body = "Описание",
}

interface Sort {
  [key: string]: SortsName | boolean | string;
  name: SortsName;
  reverse: boolean;
  query: string;
}

interface PostsState {
  posts: Post[];
  page: number;
  sort: Sort;
}

const inintialState: PostsState = {
  posts: [],
  page: 1,
  sort: {
    name: SortsName["ID"],
    reverse: false,
    query: "",
  },
};

export const postsReducer = function (
  state: PostsState = inintialState,
  action: Action
) {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, posts: action.payload as Post[] };
    case "CANGE_SORT":
      return {
        ...state,
        sort: {
          ...state.sort,
          name: action.payload as SortsName,
          reverse: false,
        },
      };
    case "REVERSE_SORT":
      return {
        ...state,
        sort: { ...state.sort, reverse: !state.sort.reverse },
      };
    case "CHANGE_QUERY":
      return {
        ...state,
        sort: { ...state.sort, query: action.payload as string },
      };
    case "CHANGE_PAGE":
      return { ...state, page: action.payload as number };
    default:
      return state;
  }
};

export const selectPageNumber = (state: PostsState) => state.page;
export const selectSort = (state: PostsState) => state.sort;
export const selectPosts = (state: PostsState) => state.posts;
export const selectSortQuery = (state: PostsState) => state.sort.query;
