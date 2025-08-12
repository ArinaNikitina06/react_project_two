import { useEffect, useState } from "react";
import FilmsList from "../components/FilmsList/FilmsList";
import Header from "../components/Header/Header";

import "./pageHome.scss";
import { getMovies } from "../API/moviesAPI";

const PageHome = () => {
  const [movies, setMovies] = useState([])
  const [pageFilms, setPageFilms] = useState(1)
  
  const setPageFilmsHandler = () => {
    setPageFilms(pageFilms + 1)
  }
  
  useEffect(() => {
    getMovies(10, pageFilms).then((data) => setMovies([...movies, ...data.docs]));
  }, [pageFilms]);
  

  return (
    <div className="page-home">
      <Header></Header>
      <FilmsList films={movies} setPageFilmsHandler={setPageFilmsHandler}></FilmsList>
    </div>
  );
};

export default PageHome;
