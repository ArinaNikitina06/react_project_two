import { API_KEY, BASE_URL_API } from "../config";

export const getActorById = (id) => {
    return fetch(`${BASE_URL_API}/person/${id}`, {
			method: 'GET',
			headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
		})
    .then(res => res.json())
    .then(data => data)
}