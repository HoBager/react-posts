import styles from "./table-head.module.css";
import { useDispatch, useSelector } from "react-redux";
import { SortsName, selectSort } from "../../store/posts-reducer";

const headers = [SortsName.id, SortsName.title, SortsName.body];

const TableHead = () => {
  const { name } = useSelector(selectSort);
  const dispatch = useDispatch();

  const handleClick = (buttonName: string) => {
    if (name === buttonName) {
      dispatch({ type: "REVERSE_SORT" });
    } else {
      dispatch({ type: "CANGE_SORT", payload: buttonName });
    }
  };
  return (
    <div className={styles.head}>
      {headers.map((name) => (
        <div key={name}>
          <button onClick={handleClick.bind(null, SortsName[name])}>
            {name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TableHead;
