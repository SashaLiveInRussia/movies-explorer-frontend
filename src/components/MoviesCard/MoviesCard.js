import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveMovie } from '../../utils/MainApi';
import './MoviesCard.css';

function MoviesCard({ card, save }) {
	const favoriteMovies = useSelector(state => state.favoriteMovies);
	const dispatch = useDispatch();

	const likeClassName = useMemo(() => {
		let className = 'card__like';

		if (favoriteMovies.find(favoriteMovie => favoriteMovie.movieId === card.id)) {
			className += ' card__like-active';
		}

		return className;
	}, [favoriteMovies, card.id]);

	function handleLikeClick(e) {
		dispatch(saveMovie({ ...card, movieId: card.id }));
	}

	const time = useMemo(() => {
		const hours = Math.floor(card.duration / 60);
		const minutes = card.duration % 60; // dur = 80 % 60 = 1

		return `${hours}ч ${minutes}м`;
	}, [card.duration]);

	return (
		<div className='card'>
			<a href={card.trailerLink} target="_blank" rel="noreferrer" className='card__contain-img'>
				<img alt={card.nameRU} className='card__img' src={'https://api.nomoreparties.co' + card.image.url} />
			</a>
			<div className='card__text'>
				<div className='card__name'>
					<div className='card__title'>{card.nameRU}</div>

					{save === false && (
						<button type='button' className={likeClassName} onClick={handleLikeClick}></button>
					)}

					{save === true && (
						<button type='button' className='card__like card__like_in card__delete' onClick={handleLikeClick}></button>
					)}

				</div>
				<div className='card__time'>{time}</div>
			</div>
		</div >
	);
}

export default MoviesCard;