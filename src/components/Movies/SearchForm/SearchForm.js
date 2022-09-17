import './SearchForm.css';

function SearchForm() {
    return (
        <section className='search'>
            <div className='search__block'>
                <input placeholder='Поиск' className='search__input' />
                <button className='search__button'>Поиск</button>
            </div>
            <div className='search__block-toggle'>
                <div className='search__toggle'>
                    <label className="switch">
                        <input className='switch-input'  type="checkbox"  />
                        <span class="slider"></span>
                    </label>
                </div>
            </div>
        </section>
    );
}

export default SearchForm;