import './SearchForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getMoviesData } from '../../utils/MoviesApi';

function SearchForm() {
	const isLoading = useSelector(state => state.isLoading);
	const [searchString, setSearchString] = useState(localStorage.getItem('search') ?? '');
	const dispatch = useDispatch();

	function handleSubmit(event) {
		event.preventDefault();

		if (isLoading) {
			return;
		}

		if (searchString) {
			dispatch(getMoviesData(searchString));
		}
	}

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	return (
		<div className='search'>
			<form onSubmit={handleSubmit} className='search__block'>
				<input required placeholder='Фильм' onChange={handleChange} value={searchString} className='search__input' type="text" />
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