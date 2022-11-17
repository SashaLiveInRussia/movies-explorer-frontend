import './SearchForm.css';

function SearchForm() {
	return (
		<section className='search'>
			<div className='search__block'>
				<input placeholder='Поиск' className='search__input' type="search" />
				<button className='search__button'>Поиск</button>
			</div>
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
		</section>
	);
}

export default SearchForm;