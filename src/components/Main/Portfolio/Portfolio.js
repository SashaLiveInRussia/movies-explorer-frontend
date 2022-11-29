import './Portfolio.css';
import arrow from '../../../images/arrow.svg';


function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__title'>Портфолио</div>
      <div className='portfolio__links'>
        <a rel="noreferrer" target="_blank" href='https://github.com/SashaLiveInRussia/russian-travel' className='portfolio__link'>
          <div className='portfolio__link-text'>Статичный сайт</div>
          <div className='portfolio__link_arrow'><img alt='стрелка' src={arrow} /></div>
        </a>
        <hr className='portfolio__hr' />
        <a rel="noreferrer" target="_blank" href='https://github.com/SashaLiveInRussia/russian-travel' className='portfolio__link'>
          <div className='portfolio__link-text'>Адаптивный сайт</div>
          <div className='portfolio__link_arrow'><img alt='стрелка' src={arrow} /></div>
        </a>
        <hr className='portfolio__hr' />
        <a rel="noreferrer" target="_blank" href='http://sasha.nomoredomains.sbs/' className='portfolio__link'>
          <div className='portfolio__link-text'>Одностраничное приложение</div>
          <div className='portfolio__link_arrow'><img alt='стрелка' src={arrow} /></div>
        </a>
        <hr className='portfolio__hr' />
      </div>
    </section>
  );
}

export default Portfolio;