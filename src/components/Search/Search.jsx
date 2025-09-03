import { useCallback, useEffect, useState } from "react";
import Input from "../UI/Input/Input";
import "./search.scss";
import { FaSearch, FaCross } from "react-icons/fa";
import SearchMiniFilm from "../SearchMiniFilm/SearchMiniFilm";
import Button from "../UI/Button/Button";
import { debounce } from "throttle-debounce";
import { getMovieByTitle } from "../../API/moviesAPI";


const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [isOpenRes, setIsOpenRes] = useState(false);
  const [movieList, setMovieList] = useState([]);

const getMoviesFetchDebounce = useCallback(debounce(2000, (text) => {
  getMovieByTitle(text)
  .then((data) => console.log(data))
}), [])

const searchHandler = (text) => { 
  setSearchText(text)
  getMoviesFetchDebounce(text);
}

  return (
    <div className="search">
      <div className="search__icon">
        <FaSearch />
      </div>
      <Input placeholder={"Введите название фильма..."} value={searchText} handler={searchHandler} isFocus={true} />
      {isOpenRes && (
        <Button use="secondary" handler={() => setIsOpenRes(false)}>
          <FaCross />
        </Button>
      )}

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
