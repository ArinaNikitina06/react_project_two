import { API_KEY, BASE_URL_API } from "../config";

export const getMovies = () => {
    return fetch(`${BASE_URL_API}/movie`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => data)
  };

export const getMovieById = (id) => {
  return fetch(`${BASE_URL_API}/movie/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
}