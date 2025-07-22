import FilmsList from '../components/FilmsList/FilmsList';
import Header from '../components/Header/Header';

import'./pageHome.scss'

const PageHome = () => {
   return (
     <div className="page-home">
       <Header></Header>
       <FilmsList></FilmsList>
     </div>
   );
 

}

export default PageHome