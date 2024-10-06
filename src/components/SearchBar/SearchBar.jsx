const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" onClick={onSubmit}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
