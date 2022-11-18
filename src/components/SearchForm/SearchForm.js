import './SearchForm.css';

function SearchForm() {
  return (
    <div className='search'>
      <form className='search__block'>
        <input required placeholder='Поиск' className='search__input' type="search" />
        <button type='submit' className='search__button'>Поиск</button>
      </form>
      <div className='search__block-toggle'>
        <div className='search__toggle'>
          <label className="switch">
            <input className='switch-input' type="checkbox" />
            <span className="slider"></span>
          </label>
          <div className='search__toggle-text'>Короткометражки</div>
        </div>
      </div>
      <hr className='search__hr' />
    </div>
  );
}

export default SearchForm;