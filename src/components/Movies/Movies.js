import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';

function Movies({ save }) {
	const cards = useSelector(state => state.cards);
	return (
		<>
			<SearchForm save={save} search={localStorage.getItem('search') ?? ''} short={localStorage.getItem('isShort')} />
			<MoviesCardList cards={cards} save={save} />
		</>
	);
}

export default Movies;