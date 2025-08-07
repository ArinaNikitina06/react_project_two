import Button from "../UI/Button/Button";
import "./actor.scss";
import { FaImage, FaStar } from "react-icons/fa";

const Actor = ({id, name, enName, enProfession, profession, photo }) => {
  return (
    <div className="actor">
      <div className="actor__img-wrapper">
        {photo ? <img className="actor__img" src={photo} /> : <FaImage />}
      </div>
      <div className="actor__info">
        <h4 className="actor__info-name">
            {name ? name : enName ? enName : 'Имя не найдено'}
        </h4>
        <span className="actor__info-profession">{profession ? profession : enProfession ? enProfession : 'Не найдено'}</span>
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
