import './Portfolio.css';
import arrow from '../../../images/arrow.svg';


function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__title'>Портфолио</div>
      <div className='portfolio__links'>
        <div className='portfolio__link'><a href='https://github.com/SashaLiveInRussia/how-to-learn' className='portfolio__link-text'>Статичный сайт</a>
          <div className='portfolio__link_arrow'><img src={arrow} /></div>
        </div>
        <hr className='portfolio__hr' />
        <div className='portfolio__link'><a href='https://github.com/SashaLiveInRussia/russian-travel' className='portfolio__link-text'>Адаптивный сайт</a>
          <div className='portfolio__link_arrow'><img src={arrow} /></div>
        </div>
        <hr className='portfolio__hr' />
        <div className='portfolio__link'>
          <a href='http://sasha.nomoredomains.sbs/' className='portfolio__link-text'>Одностраничное приложение</a>
          <div className='portfolio__link_arrow'><img src={arrow} /></div>
        </div>
        <hr className='portfolio__hr' />
      </div>
    </section>
  );
}

export default Portfolio;