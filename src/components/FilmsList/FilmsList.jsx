import { useEffect, useState } from "react";
import FIlm from "../Film/FIlm";
import Modal from "../UI/Modal/Modal";
import "./filmList.scss";
import ActorsList from "../ActorsList/ActorsList";
import { getMovieById } from "../../API/moviesAPI";
import { createPortal } from "react-dom";
import FilmLoader from "../FilmLoader/FilmLoader";
import { FaArrowRight } from "react-icons/fa";

const FilmsList = ({ films, setPageFilmsHandler }) => {
  const [isActivActorsModal, setActivActorsModal] = useState(false);
  // console.log(films);
  const [currentIDFilm, setCurrentIDFilm] = useState(0);
  const [currentActors, setCurrentActors] = useState([]);

  const openActorsModalHandler = (id) => {
    setCurrentIDFilm(id);
    setActivActorsModal(true);
  };

  useEffect(() => {
    if (currentIDFilm === 0) {
      return;
    }

    getMovieById(currentIDFilm).then((film) => setCurrentActors(film.persons));
  }, [currentIDFilm]);

  return (
    <>
      <div className="films-list">
        {films.map(({ id, name, poster, alternativeName, genres, year, type, rating }) => {
          return (
            <FIlm
              id={id}
              key={id}
              name={name}
              poster={poster}
              alternativeName={alternativeName}
              genres={genres}
              year={year}
              type={type}
              rating={rating.imdb}
              openActorsModalHandler={() => openActorsModalHandler(id)}
            ></FIlm>
          );
        })}
        <FilmLoader handler={setPageFilmsHandler}>
          Добавить еще <FaArrowRight />{" "}
        </FilmLoader>
      </div>

      {createPortal(
        <Modal isActive={isActivActorsModal} closeHandler={() => setActivActorsModal(false)}>
          <ActorsList currentActors={currentActors}></ActorsList>
        </Modal>,
        document.querySelector(".modals")
      )}
    </>
  );
};

export default FilmsList;
