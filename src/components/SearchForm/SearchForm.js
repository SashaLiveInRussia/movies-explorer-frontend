import './SearchForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getMoviesData } from '../../utils/MoviesApi';
import { filterMovies } from '../../store';

function SearchForm({ search = '', save, short = false }) {
	const isLoading = useSelector(state => state.isLoading);
	const [searchString, setSearchString] = useState(search);
	const [shortInput, setShortInput] = useState(short);
	const dispatch = useDispatch();

	function handleSubmit(event) {
		event.preventDefault();

		if (isLoading) {
			return;
		}

		if (save) {
			dispatch(filterMovies({ searchString, isShort: shortInput }));
		} else {
			if (searchString) {
				dispatch(getMoviesData({ searchString, isShort: shortInput }));
			}
		}
	}

	function handleShort(event) {
		setShortInput(event.target.checked);

		if (save) {
			dispatch(filterMovies({ isShort: event.target.checked, searchString }));
		} else {
			dispatch(getMoviesData({ isShort: event.target.checked, searchString }));
		}
	}

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	return (
		<div className='search'>
			<form onSubmit={handleSubmit} className='search__block'>
				<input required={!save} placeholder='Фильм' onChange={handleChange} value={searchString} className='search__input' type="text" />
				<button type='submit' className='search__button'>Поиск</button>
			</form>
			<div className='search__block-toggle'>
				<div className='search__toggle'>
					<label className="switch">
						<input onChange={handleShort} className='switch-input' type="checkbox" />
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