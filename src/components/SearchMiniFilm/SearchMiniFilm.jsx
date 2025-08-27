import "./searchMiniFilm.scss";

const SearchMiniFilm = () => {
  return (
    <div className="search-mini-film">
      <div className="search-mini-film__img-wrapper">
        <img className="search-mini-film__img" src="https://lipsum.app/random/80x120" alt="" />
      </div>
      <div className="search-mini-film__wrapper">
        <h3 className="search-mini-film__name">Lorem ipsum dolor sit amet.</h3>
        <div className="search-mini-film__props">
          <span className="search-mini-film__rating">5.0</span>
          <span className="search-mini-film__year">2025</span>
        </div>
      </div>
    </div>
  );
};

export default SearchMiniFilm;
