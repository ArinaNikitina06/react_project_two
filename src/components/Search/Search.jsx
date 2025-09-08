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
  if (text.length === 0) {
    return
  }

  getMovieByTitle(text).then((data) => {
    setMovieList(data.docs)
    setIsOpenRes(true)
  });
}), [])

const searchHandler = (text) => {
  if (text.length===0) {
    setMovieList([])
    setIsOpenRes(false)
  }

  setSearchText(text)
  getMoviesFetchDebounce(text);
}

// ----------------------
  const keyPressEscHandler = (event) => {
    if (event.code === "Escape") {
      setIsOpenRes(false);
      setMovieList([]);
      setSearchText('')
    }
  };

  const clickInEmptyHandler = (event) => {
    if(!event.target.closest('.search')){
        setIsOpenRes(false);
      setMovieList([]);
      setSearchText('')
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keyPressEscHandler);
    document.addEventListener("mousedown", clickInEmptyHandler);

		// call before destroy Modal
    return () => {
      document.removeEventListener("keydown", keyPressEscHandler);
      document.removeEventListener("mousedown", clickInEmptyHandler);
    };
  }, []);

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
        {
          movieList.map(({id, poster, name, rating, year}) => {
           return <SearchMiniFilm key={id} poster={poster} name={name} rating={rating} year={year}></SearchMiniFilm>;
          })
        }
      </div>
    </div>
  );
};

export default Search;