import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from './api';
export const BASE_URL = 'https://kinomovie.nomorepartiesxyz.ru';

export const register = ({ name, email, password }) => fetchApi({
	BASE_URL, path: 'signup', method: 'POST', body: { name, email, password },
});

export const login = createAsyncThunk(
	'movies/login',
	({ email, password }) => fetchApi({
		BASE_URL, path: 'signin', method: 'POST', body: { email, password },
	}).then((data) => {
		const { token, ...user } = data;
		localStorage.setItem('token', token);
		return user;
	})
);

export const updateProfile = createAsyncThunk(
	'movies/updateProfile',
	({ name, email }) => fetchApi({
		BASE_URL, path: 'users/me', method: 'PATCH', body: { name, email },
	})
);

export const logout = createAsyncThunk(
	'movies/logout',
	() => fetchApi({
		BASE_URL, path: 'signout',
	})
);

export const getUserData = () => fetchApi({
	BASE_URL, path: 'users/me',
});

export const getMovies = () => fetchApi({
	BASE_URL, path: 'movies',
});

export const saveMovie = createAsyncThunk(
	'movies/saveMovie',
	({
		country, director, duration, year, description,
		image, trailer, thumbnail, nameRU, nameEN, movieId,
	}) => fetchApi({
		BASE_URL,
		path: 'movies',
		method: 'POST',
		body: {
			country,
			director,
			duration,
			year,
			description,
			image,
			trailer,
			thumbnail,
			nameRU,
			nameEN,
			movieId,
		},
	})
);

export const removeMovie = ({ movieId }) => fetchApi({
	BASE_URL, path: `movies/${movieId}`, method: 'DELETE',
});