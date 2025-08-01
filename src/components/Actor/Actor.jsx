import Button from "../UI/Button/Button";
import "./actor.scss";
import { FaStar } from "react-icons/fa";

const Actor = () => {
  return (
    <div className="actor">
      <div className="actor__img-wrapper">
        <img className="actor__img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/627962a8-5125-4fe1-87b7-6687fc043fb3/280x420" alt="photo" />
      </div>
      <div className="actor__info">
        <h4 className="actor__info-name">Вин дизель</h4>
        <span className="actor__info-profession">Актер Продюсер Режиссер</span>
        <div className="actor__btn-wrapper">
          <Button use="primary" handler={() => {}}>
            <FaStar /> Избранное
          </Button>
        </div>
        <div className="actor__info-films">
          <span className="actor__info-films-best">Лучшие работы:</span>
          Форсаж Форсаж 5 Чёрная дыра Хроники Риддика Признайте меня виновным
        </div>
      </div>
    </div>
  );
};

export default Actor;
