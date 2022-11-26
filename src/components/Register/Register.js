import '../Register/Register.css';
import { Link, useHistory } from 'react-router-dom';
import { register } from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/useFormValidation';

function Register({ link }) {
	//const [form, setForm] = useState({});
	const history = useHistory();
	const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

	function handleReg(event) {
		event.preventDefault();
		register(values)
			.then(() => {
				resetForm();
				history.push('/movies');
			})
	}

	//function handleChange(event) {
	//	setForm(oldForm => ({ ...oldForm, [event.target.name]: event.target.value }))
	//}

	return (
		<section className='reg'>
			<form noValidate onSubmit={handleReg} className='reg__contain'>
				<Link to='/' className='reg__logo'></Link>
				<h2 className=''>Добро пожаловать!</h2>
				<div className='reg__form'>
					<label className='reg__form'>
						<div className='reg__name-form'>Имя</div>
						<input required name="name" className='reg__input' onChange={handleChange} />
						{errors.name && <span className="reg__text_error">{errors.name}</span>}
					</label>
					<label>
						<div className='reg__name-form'>E-mail</div>
						<input required name="email" onChange={handleChange} className='reg__input' type="email" />
						{errors.email && <span className="reg__text_error">{errors.email}</span>}
					</label>
					<label>
						<div className='reg__name-form' >Пароль</div>
						<input minLength="8" required name="password" className='reg__input' onChange={handleChange} type="password" />
						{errors.password && <span className="reg__text_error">{errors.password}</span>}
					</label>
				</div>
				<div className='reg__button-block'>
					<button disabled={!isValid} className='reg__button'>Зарегистрироваться</button>
					<div className='reg__link'>
						<div className='reg__link-text'>Уже зарегистрированы?</div>
						<Link to={link} className='reg__link-sign-in'>Войти</Link>
					</div>
				</div>
			</form>
		</section>
	);
}

export default Register;