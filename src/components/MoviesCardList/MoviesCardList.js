import './MoviesCardList.css';
import { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const grid = {
	1280: {
		count: 12,
		more: 3
	},

	768: {
		count: 8,
		more: 2
	},

	480: {
		count: 5,
		more: 1
	}
}

function MoviesCardList({ save, cards = [] }) {
	const isLoading = useSelector(state => state.isLoading);
	const isError = useSelector(state => state.isError);
	const [numberSlice, setNumberSlice] = useState(grid[1280].count);
	const [numberMore, setNumberMore] = useState(grid[1280].more);

	useEffect(() => {
		if (window.innerWidth < 768) {
			setNumberSlice(grid[480].count)
			setNumberMore(grid[480].more);
			return;
		}

		if (window.innerWidth < 1280) {
			setNumberSlice(grid[768].count)
			setNumberMore(grid[768].more);
			return;
		}
	}, []);

	function handleMore() {
		setNumberSlice(old => old + numberMore);
	}

	return (
		<>
			{isLoading && <Preloader />}
			{!isLoading && !isError && cards.length === 0 && (
				<p className="cardList__find-error">Ничего не найдено</p>
			)}
			{!isLoading && isError && (
				<p className="cardList__find-error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
			)}
			<section className="cardList">
				{!isLoading && cards.slice(0, numberSlice).map(card => (
					<MoviesCard key={card.id} card={card} save={save} />)
				)}
			</section>
			{!isLoading && cards.length > cards.slice(0, numberSlice).length && <>
				<button type="button" onClick={handleMore} className="more__button">Ещё</button>
			</>}
		</>
	);
};

export default MoviesCardList;
