import { FaImage } from "react-icons/fa";
import "./searchMiniFilm.scss";

const SearchMiniFilm = ({ poster, name, rating, year }) => {
  return (
    <div className="search-mini-film">
      <div className="search-mini-film__img-wrapper">{poster.previewUrl ? <img className="search-mini-film__img" src={poster.previewUrl} alt={name} /> : <FaImage />}</div>
      <div className="search-mini-film__wrapper">
        <h3 className="search-mini-film__name">{name}</h3>
        <div className="search-mini-film__props">
          <span className="search-mini-film__rating">{rating.imdb}</span>
          <span className="search-mini-film__year">{year}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchMiniFilm;
