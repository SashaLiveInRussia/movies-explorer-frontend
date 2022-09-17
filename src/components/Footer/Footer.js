import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className='foter__content'>Учебный проект Яндекс.Практикум х BeatFilm.</div>
      <hr className='foter__hr' />
      <div className='foter__links'>
        <div>© 2020</div>
        <div className=''>
          <a href='' className='foter__link'>Яндекс.Практикум</a>
          <a href='' className='foter__link'>Github</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;