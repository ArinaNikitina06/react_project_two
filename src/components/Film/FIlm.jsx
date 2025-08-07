import {useState } from "react";
import Staff from "../Staff/Staff";
import Button from "../UI/Button/Button";
import "./film.scss";
import { FaPlay, FaStar, FaRegStar, FaShare, FaImage, FaUser} from "react-icons/fa";

// type FIlmType = { 
//   name: string
//   poster: string
//   alternativeName: string
//   genres: string
//   year: number
//   type: string
//   rating: number,
// }

const FIlm = ({ id, name, poster, alternativeName, genres, year, type, rating, openActorsModalHandler }) => {
  const [favorite, setFavorite] = useState(false); // useState -> [currentState, setCurrentState]

  return (
    <div className="film">
      <header className="film__img-wrapper">{poster ? <img className="film__img" src={poster.previewUrl} alt="" /> : <FaImage />}</header>
      <footer className="film__content">
        <div className="film__control">
          <Button use="primary" handler={() => {}} isRound>
            <FaPlay />
          </Button>

          <div className="film__control-right">
            <Button use="secondary" handler={() => setFavorite((currentFavorite) => !currentFavorite)} isRound>
              {favorite ? <FaStar /> : <FaRegStar />}
            </Button>
            <Button use="secondary" handler={() => {}} isRound disabled>
              <FaShare />
            </Button>
            <Button use="secondary" handler={openActorsModalHandler} isRound>
              <FaUser />
            </Button>
          </div>
        </div>
        <h3 className="film__title">{name ? name : "Название не найдено"}</h3>
        <div className="film__staff">
          <Staff>{alternativeName ? alternativeName : "Название не найдено"}</Staff>
        </div>
        <div className="film__props">
          <div className="film__props-item">
            <span className="film__props-text">Gener</span>
            <span className="film__props-value">{genres ? genres[0].name : "no"}</span>
          </div>
          <div className="film__props-item">
            <span className="film__props-text">Release</span>
            <span className="film__props-value">{year ? year : "no"}</span>
          </div>
          <div className="film__props-item">
            <span className="film__props-text">type</span>
            <span className="film__props-value">{type ? type : "no"}</span>
          </div>
          <div className="film__props-item">
            <span className="film__props-text">iMDB</span>
            <span className="film__props-value">{rating ? rating : "no"}</span>
          </div>
        </div>
        <div className="film__btn">
          <Button use="primary" handler={() => console.log("yes")}>
            show film
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default FIlm;
