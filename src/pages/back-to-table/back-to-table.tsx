import { Link } from "react-router-dom";
import styles from "./back-to-table.module.css";
const BackToTable = () => {
  return (
    <div className={styles.body}>
      <Link to={"/ReactPosts/1"}>
        <button
          className={styles.back}
        >{`Вернутся на страницу с таблицей`}</button>
      </Link>
    </div>
  );
};

export default BackToTable;
