import { useSelector } from 'react-redux';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ save }) {
	const filteredFavoriteMovies = useSelector(state => state.filteredFavoriteMovies);

	return (
		<>
			<SearchForm save={save} />
			<MoviesCardList save={save} cards={filteredFavoriteMovies} />
		</>
	);
}

export default SavedMovies;