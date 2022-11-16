import '../MoviesCardList/MoviesCardList.css';
import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Movies/Preloader/Preloader';

function MoviesCardList({ save }) {
	const [cards, setCards] = useState([]);
	const [numberSlice, setNumberSlice] = useState(12);

	useEffect(() => {
		setCards(
			[
				{
					_id: 1,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 1231231,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 18658,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 1097870,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 1988567,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
			]
		);
	}, []);

	function handleMore() {
		setNumberSlice(old => old + 12);
	}
	return (
		<>
			<section className='cardList'>
				{cards.slice(0, numberSlice).map(card => (
					<MoviesCard key={card._id} card={card} save={save} />
				))}
			</section>
			{cards.length > cards.slice(0, numberSlice).length && <Preloader more={handleMore} cards={cards} />}
		</>
	);
}

export default MoviesCardList;
