import styles from './SearchBox.module.css';

const SearchBox = ({ searchChange }) => {
  return (
    <div className={styles.searchBox}>
      <input
        className={styles.searchInput}
        type="search"
        placeholder="search robots"
        name="SearchBox"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
