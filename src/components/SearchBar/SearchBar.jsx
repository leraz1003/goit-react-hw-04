import { useRef, useState } from "react";
import s from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [value, setValues] = useState("");

  const btnRef = useRef();

  const handleIconClick = () => {
    btnRef.current.click();
  };

  const handleChange = (evt) => {
    setValues(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const searchValue = evt.target.elements.searchImg.value;
    if (!searchValue.trim()) {
      toast.error("Please enter a search term.");
    }
    onSubmit(searchValue);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <FiSearch className={s.searchLogo} onClick={handleIconClick} />
        <input
          value={value}
          className={s.searchBar}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchImg"
          onChange={handleChange}
        />
        <button ref={btnRef} type="submit" className={s.searchBtn}></button>
      </form>
    </header>
  );
};

export default SearchBar;
