import { useEffect, useState } from "react";
import FilmsList from "../components/FilmsList/FilmsList";
import Header from "../components/Header/Header";

import "./pageHome.scss";
import { getMovies } from "../API/moviesAPI";

const PageHome = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies().then((data) => setMovies(data.docs))
  }, []);
  
  return (
    <div className="page-home">
      <Header></Header>
      <FilmsList films={movies}></FilmsList>
    </div>
  );
};

export default PageHome;
