import '../Profile/Profile.css';
import Header from '../Header/Header';

function Profile({ link }) {
	const profile = {
		title: 'Виталий',
		email: 'pochta@yandex.ru'
	}

	return (
		<>
			<Header auth={true} />
			<section className='reg'>
				<div className='profile__contain'>
					<h2 className=''>Привет, {profile.title}</h2>
					<div className='profile__info'>
						<div className='profile__info-text'>
							<div className='profile__name'>Имя</div>
							<div className='profile__name' type="email" />{profile.title}</div>
					</div>

					<hr className='profile__hr' />

					<div className='profile__info-text'>
						<div className='profile__name' >E-mail</div>
						<div className='profile__name' type="password" />{profile.email}</div>

					<div className='profile__button-block'>
						<button className='profile__button'>Редактировать</button>
						<button className='reg__link'>Выйти из аккаунта</button>
					</div>
				</div>
			</section >
		</>
	);
}

export default Profile;

