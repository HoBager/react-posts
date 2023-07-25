import { createStore } from "redux";
import { postsReducer } from "./posts-reducer";

export interface Action {
  type: string;
  payload: unknown;
}

export const store = createStore(postsReducer);
