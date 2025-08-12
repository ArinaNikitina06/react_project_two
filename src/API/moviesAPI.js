import { API_KEY, BASE_URL_API, PROXY } from "../config";

export const getMovies = () => {
    return fetch(`${PROXY}/${BASE_URL_API}/movie`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  };

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
}
