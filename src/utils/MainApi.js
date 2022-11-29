import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from './api';
export const BASE_URL = 'https://kinomovie.nomorepartiesxyz.ru';

export const register = createAsyncThunk(
	'movies/register',
	({ name, email, password }) => fetchApi({
		BASE_URL, path: 'signup', method: 'POST', body: { name, email, password },
	}).then((data) => {
		const { token, ...user } = data;
		localStorage.setItem('token', token);
		return user;
	})
);

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

export const getUserData = createAsyncThunk(
	'movies/getUserData',
	() => fetchApi({
		BASE_URL, path: 'users/me'
	})
);

export const getMovies = createAsyncThunk(
	'movies/getMovies',
	() => fetchApi({
		BASE_URL, path: 'movies',
	})
);

export const saveMovie = createAsyncThunk(
	'movies/saveMovie',
	({
		country, director, duration, year, description,
		image, trailerLink, thumbnail, nameRU, nameEN, movieId,
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
			trailerLink,
			thumbnail,
			nameRU,
			nameEN,
			movieId,
		},
	}).then(({ data }) => data)
);

export const removeMovie = createAsyncThunk(
	'movies/removeMovie',
	(movieId) => fetchApi({
		BASE_URL, path: `movies/${movieId}`, method: 'DELETE',
	}).then(() => {
		return movieId
	})
);