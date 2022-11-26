import { createAsyncThunk } from "@reduxjs/toolkit";

export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

function getResponse(res) {
	if (res.ok) {
		return res.json();
	}

	return Promise.reject(`Ошибка ${res.status}`);
};

export const getMoviesData = createAsyncThunk(
	'movies/getMoviesData',
	({ searchString, isShort }) => {
		localStorage.setItem('search', searchString);
		localStorage.setItem('isShort', isShort);

		return fetch(`${MOVIES_URL}`, {
			method: "GET",
			headers: headers,
		})
			.then((res) => getResponse(res))
			.then(cards => {
				if (searchString) {
					cards = cards.filter(card =>
						card.nameRU
							.toLowerCase()
							.indexOf(searchString.toLowerCase()) >= 0
					)
				}

				if (isShort) {
					cards = cards.filter(card => card.duration <= 40)
				}

				return cards;
			})
			.then(filteredCards => {
				localStorage.setItem('movies', JSON.stringify(filteredCards));
				return filteredCards;
			});
	}
);