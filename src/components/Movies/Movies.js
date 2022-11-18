import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function Movies({ save }) {
	return (
		<>
			<SearchForm />
			<MoviesCardList save={save} />
		</>
	);
}

export default Movies;