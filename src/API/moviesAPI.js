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
