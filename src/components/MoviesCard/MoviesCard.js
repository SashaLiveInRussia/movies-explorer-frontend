import './MoviesCard.css';

function MoviesCard({ card, save }) {
  function handleLikeClick(e) {
    e.currentTarget.classList.toggle('card__like-activ');
  }

  return (
    <div className='card'>
      <div className='card__contain-img'>
        <img alt={card.title} className='card__img' src={card.img} />
      </div>
      <div className='card__text'>
        <div className='card__name'>
          <div className='card__title'>{card.title}</div>

          {save === false && (
            <button type='button' className='card__like' onClick={handleLikeClick}></button>
          )}

          {save === true && (
            <button type='button' className='card__like card__like_in card__delete' onClick={handleLikeClick}></button>
          )}

        </div>
        <div className='card__time'>1ч 47м</div>
      </div>
    </div >
  );
}

export default MoviesCard;