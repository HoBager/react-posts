import { FC, useState } from "react";
import { SearchLogo } from "./search-logo";
import styles from "./search.module.css";

interface SearchProps {
  onSubmit: (value: string) => void;
}

const Search: FC<SearchProps> = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(searchValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className={styles.search}
          type="text"
          placeholder="Поиск"
        />
        <button>
          <SearchLogo />
        </button>
      </form>
    </div>
  );
};

export default Search;
