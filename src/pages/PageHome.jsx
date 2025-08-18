import { useEffect, useState } from "react";
import FilmsList from "../components/FilmsList/FilmsList";
import Header from "../components/Header/Header";

import "./pageHome.scss";
import { getMovies } from "../API/moviesAPI";
import { ToastContainer, toast } from "react-toastify";

const PageHome = () => {
  const [movies, setMovies] = useState([]);
  const [pageFilms, setPageFilms] = useState(1);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [moviesTotal, setMoviesTotal] = useState(0);

  const setPageFilmsHandler = () => {
    if (isMoviesLoading === true) {
      return;
    }

    // отловили ошибку на переполнение запроса фильмов
    if (movies.length + 10 > moviesTotal) {
      return;
    }

    setPageFilms(pageFilms + 1);
  };

  useEffect(() => {
    setIsMoviesLoading(true);

    getMovies(10, pageFilms)
      .then((data) => {
        setMovies([...movies, ...data.docs]);
        setMoviesTotal(data.total);
      })
      .catch((error) => toast.error("error in getMovies!" + error.message))
      .finally(() => setIsMoviesLoading(false));
  }, [pageFilms]);

  useEffect(() => {
    if (movies.length === 0) {
      return;
    }

    toast.success(`loaded ${movies.length} movies`);
  }, [movies]);

  /* 
  
  +1. надо понимать когда идет загрузка
  +2. надо понимать если ли ошибки в момент загрузки
  +3. надо понимать а можем ли мы еще загужать (30) -> 10 10 10 ???
  
  */

  return (
    <div className="page-home">
      <Header></Header>
      <FilmsList films={movies} setPageFilmsHandler={setPageFilmsHandler} isMoviesLoading={isMoviesLoading}></FilmsList>
      <ToastContainer position="top-center" theme="dark"></ToastContainer>
    </div>
  );
};

export default PageHome;
