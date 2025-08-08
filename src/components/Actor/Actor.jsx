import { use, useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import "./actor.scss";
import { FaImage, FaStar } from "react-icons/fa";
import { getActorById } from "../../API/actorsAPI";
import { getSortedMoviesByRating } from "../../utils";


const Actor = ({ id, name, enName, enProfession, profession, photo }) => {
  const [fullActor, setFullActor] = useState({});

  useEffect(() => {
    getActorById(id).then((actor) =>  setFullActor({
      ...actor,
      movies: getSortedMoviesByRating(actor.movies)
    }));
  }, []);

  return (
    <div className="actor">
      <div className="actor__img-wrapper">{photo ? <img className="actor__img" src={photo} /> : <FaImage />}</div>
      <div className="actor__info">
        <h4 className="actor__info-name">{name ? name : enName ? enName : "Имя не найдено"}</h4>
        <span className="actor__info-profession">{profession ? profession : enProfession ? enProfession : "Не найдено"}</span>
        <div className="actor__btn-wrapper">
          <Button use="primary" handler={() => {}}>
            <FaStar /> Избранное
          </Button>
        </div>
        <div className="actor__info-films">
          <span className="actor__info-films-best">Лучшие работы:</span>
          {!fullActor.movies && 'работы загружаются'}

          {fullActor.movies && fullActor.movies.map((movie, i) => {
            return <span className="actor__info-films-item" key={i}>{movie.name}</span>
          })}
        </div>
      </div>
    </div>
  );
};

export default Actor;
