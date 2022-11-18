import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ save }) {
	return (
		<>
			<SearchForm />
			<MoviesCardList save={save} />
		</>
	);
}

export default SavedMovies;