import { FC, useMemo } from "react";
import styles from "./page-indicator.module.css";

interface PageIndicatorProps {
  countPages: number;
  currentPage: number;
}

function createNumberArray(end: number): number[] {
  const result = [];
  let number = 1;
  while (number <= end) {
    result.push(number++);
  }
  return result;
}

const PageIndicator: FC<PageIndicatorProps> = ({ currentPage, countPages }) => {
  const pages = useMemo(() => createNumberArray(countPages), [countPages]);
  const startIndex =
    currentPage + 4 < countPages ? currentPage - 1 : countPages - 5;
  const visiblePages = [...pages].splice(startIndex, 5);

  return (
    <div className={styles.indicator}>
      {visiblePages.map((num) => (
        <div className={num === currentPage ? styles.active : ""} key={num}>
          {num}
        </div>
      ))}
    </div>
  );
};

export default PageIndicator;
