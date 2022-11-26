import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';

function Movies({ save }) {
	const cards = useSelector(state => state.cards);
	return (
		<>
			<SearchForm />
			<MoviesCardList cards={cards} save={save} />
		</>
	);
}

export default Movies;