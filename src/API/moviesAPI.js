import { API_KEY, BASE_URL_API, PROXY } from "../config";

export const getMovies = (limit, page) => {
  return fetch(`${PROXY}/${BASE_URL_API}/movie?limit=${limit}&page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

// "https://api.kinopoisk.dev/v1.4/movie?limit=10&page=1"
// "https://api.kinopoisk.dev/v1.4/movie?limit=10&page=2"
// "https://api.kinopoisk.dev/v1.4/movie?limit=10&page=3"
// "https://api.kinopoisk.dev/v1.4/movie?limit=10&page=4"


export const getMovieById = (id) => {
  return fetch(`${PROXY}/${BASE_URL_API}/movie/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const getMovieByTitle = (title) => {
  return fetch(`${PROXY}/${BASE_URL_API}/movie/search?limit=10&query=${title}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
}


// const options = {
//   method: 'GET',
//   headers: {accept: 'application/json', 'X-API-KEY': '6KVSF1N-X4W406N-KD3ZNY9-CR3124K'}
// };

// fetch('https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=%D1%84%D0%BE%D1%80%D1%81%D0%B0%D0%B6', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));