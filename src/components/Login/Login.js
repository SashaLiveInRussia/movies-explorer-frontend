import '../Login/Login.css';
import { Link } from 'react-router-dom';

function Login({ link }) {
	return (
		<section className='reg'>
			<div className='reg__contain'>
				<Link to='/' className='reg__logo'></Link>
				<h2 className=''>Рады видеть!</h2>
				<div className='reg__form'>
					<label>
						<div className='reg__name-form' >E-mail</div>
						<input className='reg__input' type="email" />
					</label>
					<label>
						<div className='reg__name-form' >Пароль</div>
						<input className='reg__input' type="password" />
						<span className="reg__text_error">Что-то пошло не так...</span>
					</label>
				</div>
				<div className='reg__button-block'>
					<button className='reg__button'>Зарегистрироваться</button>
					<div className='reg__link'>
						<div className='reg__link-text'>Ещё не зарегистрированы?</div>
						<Link to={link} className='reg__link-sign-in'>Регистрация</Link>
					</div>
				</div>
			</div>
		</section >
	);
}

export default Login;