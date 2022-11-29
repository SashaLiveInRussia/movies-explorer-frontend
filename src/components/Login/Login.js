import '../Login/Login.css';
import { Link, useHistory } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/useFormValidation';
import { login } from '../../utils/MainApi';
import { useDispatch } from 'react-redux';

function Login({ link }) {
	const history = useHistory();
	const { values, handleChange, errors, isValid } = useFormWithValidation();
	const dispatch = useDispatch();

	function handleSubmit(event) {
		event.preventDefault();

		dispatch(login(values)).unwrap()
			.then(() => {
				history.push('/movies')
			});
	}

	return (
		<section className='reg'>
			<form onSubmit={handleSubmit} noValidate className='reg__contain'>
				<Link to='/' className='reg__logo'></Link>
				<h2 className=''>Рады видеть!</h2>
				<div className='reg__form'>
					<label>
						<div className='reg__name-form' >E-mail</div>
						<input name="email" onChange={handleChange} required className='reg__input' type="email" />
						{errors.email && <span className="reg__text_error">{errors.email}</span>}
					</label>
					<label>
						<div className='reg__name-form' >Пароль</div>
						<input minLength="8" onChange={handleChange} required className='reg__input' name="password" type="password" />
						{errors.password && <span className="reg__text_error">{errors.password}</span>}
					</label>
				</div>
				<div className='reg__button-block'>
					<button disabled={!isValid} className='reg__button'>Войти</button>
					<div className='reg__link'>
						<div className='reg__link-text'>Ещё не зарегистрированы?</div>
						<Link to={link} className='reg__link-sign-in'>Регистрация</Link>
					</div>
				</div>
			</form>
		</section >
	);
}

export default Login;