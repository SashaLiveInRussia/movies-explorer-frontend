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
	(search) => {
		localStorage.setItem('search', search);
		
		return fetch(`${MOVIES_URL}`, {
			method: "GET",
			headers: headers,
		})
			.then((res) => getResponse(res))
			.then(cards => {
				return cards.filter(card =>
					card.nameRU
						.toLowerCase()
						.indexOf(search.toLowerCase()) >= 0
				);
			})
			.then(filteredCards => {
				localStorage.setItem('movies', JSON.stringify(filteredCards));
				return filteredCards;
			});
	}
);