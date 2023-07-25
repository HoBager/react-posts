import { Link } from "react-router-dom";
import styles from "./back-to-table.module.css";
const BackToTable = () => {
  return (
    <div className={styles.body}>
      <Link to={"/1"}>
        <button
          className={styles.back}
        >{`Перейти к таблице`}</button>
      </Link>
    </div>
  );
};

export default BackToTable;
