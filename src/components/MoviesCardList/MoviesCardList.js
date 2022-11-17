import './MoviesCardList.css';
import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

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
				{
					_id: 13123213,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 111111,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 22222222,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 333333,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 4444444444,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 5555551,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 66661,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 781,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 1234225,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 75471,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 34243251,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 1243242,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 15435636,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 125325,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 125325253,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 87097,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 43244,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 643,
					img: '/images/film1.png',
					title: 'Моя карточка'
				},
				{
					_id: 32,
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
