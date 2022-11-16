import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header({ auth }) {
	return (
		<header>

			{auth === false && (
				<div className='header'>
					<Link className='header__logo' to='/'><img src={logo} /></Link>
					<div className='header__auth'>
						<Link className='header__reg' to='/signup'>Регистрация</Link>
						<div className='header__login-background'>
							<Link className='header__login' to='/signin'>Войти</Link>
						</div>
					</div>
				</div>
			)}
			{auth === true && (
				<div className="header">
					<div className="header__auth">
						<Link className="header__logo" to='/'><img src={logo} /></Link>
						<div className='header__films'>
							<Link to='/movies' className='header__film'>Фильмы</Link>
							<Link to='/saved-movies' className='header__film'>Сохранённые фильмы</Link>
						</div>
					</div>
					<Link className='header__auth' to='/profile'>Аккаунт</Link>
				</div>
			)}
		</header>
	);
}

export default Header;