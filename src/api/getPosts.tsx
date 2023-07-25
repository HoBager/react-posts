export interface Post {
  [key: string]: number | string;
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async function (): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};
