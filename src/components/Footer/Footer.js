import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className='foter__content'>Учебный проект Яндекс.Практикум х BeatFilm.</div>
      <hr className='foter__hr' />
      <div className='foter__links'>
        <div className='footer__year'>© 2022</div>
        <div className='footer__link'>
          <a href='https://practicum.yandex.ru/' className='foter__link'>Яндекс.Практикум</a>
          <a href='https://github.com/SashaLiveInRussia' className='foter__link'>Github</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;