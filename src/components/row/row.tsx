import { FC } from "react";
import styles from "./row.module.css";
import { Post } from "../../api/getPosts";

interface RowProps {
  data: Omit<Post, "userId">;
}

const Row: FC<RowProps> = ({ data }) => {
  const cells = Object.values(data);

  return (
    <div className={styles.row}>
      {cells.map((cell) => (
        <div key={cell} className={styles.cell}>
          {cell}
        </div>
      ))}
    </div>
  );
};

export default Row;
