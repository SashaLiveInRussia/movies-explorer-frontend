import '../MoviesCard/MoviesCard.css';

function MoviesCard({ card }) {
	return (
		<div className='card'>
			<div className='card__contain-img'>
				<img className='card__img' src={card.img} />
			</div>
			<div className='card__text'>
				<div className='card__name'>
					<div className='card__title'>{card.title}</div>
					<button className='card__delete_invis card__delete'></button>
				</div>
				<div className='card__time'>1ч 47м</div>
			</div>
		</div >
	);
}

export default MoviesCard;