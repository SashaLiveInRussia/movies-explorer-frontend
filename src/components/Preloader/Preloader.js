import './Preloader.css';

function Preloader({ more }) {
  const preloadVisible = `preloader__button`;

  return (
    <section className='preloader'>
      <button type='button' onClick={more} className={preloadVisible}>Ещё</button>
    </section>
  );
}

export default Preloader;
