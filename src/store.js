import { createSlice, configureStore } from '@reduxjs/toolkit'
import { getMovies, getUserData, login, logout, register, removeMovie, saveMovie, updateProfile } from './utils/MainApi';
import { getMoviesData } from './utils/MoviesApi';

const moviesSlice = createSlice({
	name: 'movies',
	initialState: {
		cards: JSON.parse(localStorage.getItem('movies') ?? '[]'),
		isLoading: false,
		isError: false,
		favoriteMovies: [],
		filteredFavoriteMovies: [],
		currentUser: {},
		auth: false,
	},
	reducers: {
		setIsLoading(state, action) {
			state.isLoading = action.payload;
		},

		filterMovies(state, action) {
			const { searchString, isShort } = action.payload;
			state.filteredFavoriteMovies = state.favoriteMovies

			if (searchString) {
				state.filteredFavoriteMovies = state.filteredFavoriteMovies.filter(card =>
					card.nameRU
						.toLowerCase()
						.indexOf(searchString.toLowerCase()) >= 0
				)
			}

			if (isShort) {
				state.filteredFavoriteMovies = state.filteredFavoriteMovies.filter(card => card.duration <= 40)
			}
		}
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
			state.filteredFavoriteMovies.push(action.payload);
		},
		[login.fulfilled](state, action) {
			state.currentUser = action.payload;
			state.auth = true;
		},
		[register.fulfilled](state, action) {
			state.currentUser = action.payload;
			state.auth = true;
		},
		[updateProfile.fulfilled](state, action) {
			state.currentUser = action.payload;
		},
		[logout.fulfilled](state) {
			state.currentUser = {};
			state.auth = false;
		},
		[getUserData.fulfilled](state, action) {
			state.currentUser = action.payload;
			state.auth = true;
		},
		[getMovies.fulfilled](state, action) {
			state.favoriteMovies = action.payload;
			state.filteredFavoriteMovies = action.payload;
		},
		[removeMovie.fulfilled](state, action) {
			state.favoriteMovies = state.favoriteMovies.filter(favoriteMovie => favoriteMovie._id !== action.payload)
			state.filteredFavoriteMovies = state.filteredFavoriteMovies.filter(favoriteMovie => favoriteMovie._id !== action.payload)
		}
	}
});

export const { setIsLoading, filterMovies } = moviesSlice.actions

const store = configureStore({
	reducer: moviesSlice.reducer
});

export default store;