import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';

function SavedMovies({ save }) {
	return (
		<>
			<SearchForm />
			<MoviesCardList save={save} />
		</>
	);
}

export default SavedMovies;