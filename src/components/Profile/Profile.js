import '../Profile/Profile.css';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useFormWithValidation } from '../../utils/useFormValidation';
import { logout, updateProfile } from '../../utils/MainApi';
import { useHistory } from 'react-router-dom';

function Profile({ link }) {
	const history = useHistory();
	const currentUser = useSelector(state => state.currentUser);
	const { values, handleChange, errors, isValid } = useFormWithValidation();
	const dispatch = useDispatch();

	function handleSubmit(event) {
		event.preventDefault();
		dispatch(updateProfile(values))
	}

	function handleLogout() {
		localStorage.removeItem('token');
		dispatch(logout())
			.then(() => {
				history.push('/');
			})
	}

	return (
		<>
			<Header auth={true} />
			<section className='reg'>
				<form onSubmit={handleSubmit} className='profile__contain'>
					<h2 className=''>Привет, {currentUser.name}</h2>
					<div className='profile__info'>
						<div className='profile__info-text'>
							<div className='profile__name'>Имя</div>
							<div className='profile__name' type="email">{currentUser.name}</div>
						</div>
					</div>

					<hr className='profile__hr' />

					<div className='profile__info-text'>
						<div className='profile__name' >E-mail</div>
						<div className='profile__name' type="password">{currentUser.email}</div>
					</div>

					<div className='profile__button-block'>
						<button disabled={!isValid} className='profile__button'>Редактировать</button>
						<button onClick={handleLogout} type='button' className='reg__link'>Выйти из аккаунта</button>
					</div>
				</form>
			</section >
		</>
	);
}

export default Profile;

