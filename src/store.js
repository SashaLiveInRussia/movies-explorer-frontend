import { createSlice, configureStore } from '@reduxjs/toolkit'
import { login, logout, saveMovie, updateProfile } from './utils/MainApi';
import { getMoviesData } from './utils/MoviesApi';

const moviesSlice = createSlice({
	name: 'movies',
	initialState: {
		cards: JSON.parse(localStorage.getItem('movies') ?? '[]'),
		isLoading: false,
		isError: false,
		favoriteMovies: [],
		currentUser: {},
		auth: false,
	},
	reducers: {
		setIsLoading(state, action) {
			state.isLoading = action.payload;
		},
	},
	extraReducers: {
		[getMoviesData.pending](state) {
			state.isLoading = true;
			state.isError = false;
		},
		[getMoviesData.rejected](state) {
			state.isLoading = false;
			state.isError = true;
		},
		[getMoviesData.fulfilled](state, action) {
			state.cards = action.payload;
			state.isLoading = false;
		},
		[saveMovie.fulfilled](state, action) {
			state.favoriteMovies.push(action.payload);
		},
		[login.fulfilled](state, action) {
			state.currentUser = action.payload;
			state.auth = true;
		},
		[updateProfile.fulfilled](state, action) {
			state.currentUser = action.payload;
		},
		[logout.fulfilled](state, action) {
			state.currentUser = {};
			state.auth = false;
		}
	}
});

// pending - Запрос в процессе
// rejected - Запрос пришел с ошибкой
// fulfilled - Запрос пришел успешно 

export const { setIsLoading } = moviesSlice.actions

const store = configureStore({
	reducer: moviesSlice.reducer
});

export default store;