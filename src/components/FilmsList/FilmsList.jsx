import FIlm from "../Film/FIlm";
import "./filmList.scss";

const FilmsList = ({ films }) => {
  console.log(films);
  return (
    <div className="films-list">
      {films.map(({name, poster, alternativeName, genres, year, type, rating}) => {
        return (
          <FIlm name={name} poster={poster} alternativeName={alternativeName} genres={genres} year={year} type={type} rating={rating.imdb}></FIlm>
        );
      })}
    </div>
  );
};

export default FilmsList;

// {
//     "id": 8484692,
//     "name": "Дочь Альфы",
//     "alternativeName": "The Alpha's Daughter",
//     "type": "tv-series",
//     "typeNumber": 2,
//     "year": 2023,
//     "description": null,
//     "shortDescription": null,
//     "status": "completed",
//     "rating": {
//         "kp": 0,
//         "imdb": 7.4,
//         "filmCritics": 0,
//         "russianFilmCritics": 0,
//         "await": 0
//     },
//     "votes": {
//         "kp": 0,
//         "imdb": 75,
//         "filmCritics": 0,
//         "russianFilmCritics": 0,
//         "await": 0
//     },
//     "movieLength": null,
//     "totalSeriesLength": 1,
//     "seriesLength": null,
//     "ratingMpaa": null,
//     "ageRating": null,
//     "genres": [
//         {
//             "name": "ужасы"
//         },
//         {
//             "name": "фэнтези"
//         },
//         {
//             "name": "драма"
//         },
//         {
//             "name": "приключения"
//         }
//     ],
//     "countries": [
//         {
//             "name": "США"
//         }
//     ],
//     "releaseYears": [
//         {
//             "start": 2023,
//             "end": 2023
//         }
//     ],
//     "top10": null,
//     "top250": null,
//     "isSeries": true,
//     "ticketsOnSale": false
// }
