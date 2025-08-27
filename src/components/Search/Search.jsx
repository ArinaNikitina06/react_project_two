import { useState } from "react";
import Input from "../UI/Input/Input";
import "./search.scss";
import { FaSearch, FaCross } from "react-icons/fa";
import SearchMiniFilm from "../SearchMiniFilm/SearchMiniFilm";
import Button from "../UI/Button/Button";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [isOpenRes, setIsOpenRes] = useState(true);

  return (
    <div className="search">
      <div className="search__icon">
        <FaSearch />
      </div>
      <Input placeholder={"Введите название фильма..."} value={searchText} handler={setSearchText} isFocus={true} />
      {isOpenRes && <Button use="secondary" handler={() => setIsOpenRes(false)}>
        <FaCross />
      </Button>}
      
      <div className={`search__res ${isOpenRes ? "search__res--active" : ""}`}>
        <SearchMiniFilm></SearchMiniFilm>
        <SearchMiniFilm></SearchMiniFilm>
        <SearchMiniFilm></SearchMiniFilm>
        <SearchMiniFilm></SearchMiniFilm>
        <SearchMiniFilm></SearchMiniFilm>
        <SearchMiniFilm></SearchMiniFilm>
        <SearchMiniFilm></SearchMiniFilm>
        <SearchMiniFilm></SearchMiniFilm>
      </div>
    </div>
  );
};

export default Search;
