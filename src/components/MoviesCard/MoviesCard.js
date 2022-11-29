import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logoutStorage from '../../utils/logoutStorage';
import { removeMovie, saveMovie } from '../../utils/MainApi';
import './MoviesCard.css';

function MoviesCard({ card, save, image }) {
	const favoriteMovies = useSelector(state => state.favoriteMovies);
	const dispatch = useDispatch();
	const history = useHistory();

	const likeClassName = useMemo(() => {
		let className = 'card__like';

		if (favoriteMovies.some(favoriteMovie => favoriteMovie.movieId === card.id)) {
			className += ' card__like-active';
		}

		return className;
	}, [favoriteMovies, card.id]);

	function handleLikeClick(e) {
		const favoriteMovie = favoriteMovies.find(favoriteMovie => favoriteMovie.movieId === card.id);
		if (favoriteMovie) {
			dispatch(removeMovie(favoriteMovie._id));
		} else {
			dispatch(saveMovie({
				...card,
				movieId: card.id,
				image: 'https://api.nomoreparties.co' + card.image.url,
				thumbnail: 'https://api.nomoreparties.co' + card.image.formats.thumbnail.url
			}))
			.unwrap()
			.catch(error => {
				if (error.status === 401) {
					logoutStorage();
					history.push('/');
				}
			});
		}
	}

	function handleRemoveClick() {
		dispatch(removeMovie(card._id));
	}

	const time = useMemo(() => {
		const hours = Math.floor(card.duration / 60);
		const minutes = card.duration % 60; // dur = 80 % 60 = 1

		if (hours > 0) {
			return `${hours}ч ${minutes}м`;
		} else {
			return `${minutes}м`;
		}
	}, [card.duration]);

	return (
		<div className='card'>
			<a href={card.trailerLink} target="_blank" rel="noreferrer" className='card__contain-img'>
				<img alt={card.nameRU} className='card__img' src={image} />
			</a>
			<div className='card__text'>
				<div className='card__name'>
					<div className='card__title'>{card.nameRU}</div>

					{save === false && (
						<button type='button' className={likeClassName} onClick={handleLikeClick}></button>
					)}

					{save === true && (
						<button type='button' className='card__like card__like_in card__delete' onClick={handleRemoveClick}></button>
					)}

				</div>
				<div className='card__time'>{time}</div>
			</div>
		</div >
	);
}

export default MoviesCard;