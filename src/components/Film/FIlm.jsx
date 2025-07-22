import { useState } from "react";
import Staff from "../Staff/Staff";
import Button from "../UI/Button/Button";
import "./film.scss";
import { FaPlay, FaStar, FaRegStar, FaShare } from "react-icons/fa";

const FIlm = () => {
  const [favorite, setFavorite] = useState(false); // useState -> [currentState, setCurrentState]

  return (
    <div className="film">
      <header className="film__img-wrapper">
        <img
          className="film__img"
          src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_67a7cf0d8fb6af7e47d317ee_67a7d16efb735d388837540d/scale_1200"
          alt=""
        />
      </header>
      <footer className="film__content">
        <div className="film__control">
          <Button use="primary" handler={() => {}} isRound>
            <FaPlay />
          </Button>

          <div className="film__control-right">
            <Button use="secondary" handler={() => setFavorite(!favorite)} isRound>
              {favorite ? <FaStar /> : <FaRegStar />}
            </Button>
            <Button use="secondary" handler={() => {}} isRound disabled>
              <FaShare />
            </Button>
          </div>
        </div>
        <h3 className="film__title">Lorem ipsum dolor sit amet</h3>
        <div className="film__staff">
          <Staff>Barry Janckens</Staff>
        </div>
        <div className="film__props">
          <div className="film__props-item">
            <span className="film__props-text">Gener</span>
            <span className="film__props-value">Drama</span>
          </div>
          <div className="film__props-item">
            <span className="film__props-text">Gener</span>
            <span className="film__props-value">Drama</span>
          </div>
          <div className="film__props-item">
            <span className="film__props-text">Gener</span>
            <span className="film__props-value">Drama</span>
          </div>
          <div className="film__props-item">
            <span className="film__props-text">Gener</span>
            <span className="film__props-value">Drama</span>
          </div>
        </div>
        <div className="film__btn">
          <Button use="primary" handler={() => console.log("show film")}>
            show film
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default FIlm;
