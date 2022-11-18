import '../Register/Register.css';
import { Link } from 'react-router-dom';

function Register({ link }) {
  return (
    <section className='reg'>
      <form className='reg__contain'>
        <Link to='/' className='reg__logo'></Link>
        <h2 className=''>Добро пожаловать!</h2>
        <div className='reg__form'>
          <label className='reg__form'>
            <div className='reg__name-form'>Имя</div>
            <input className='reg__input' />
          </label>
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
            <div className='reg__link-text'>Уже зарегистрированы?</div>
            <Link to={link} className='reg__link-sign-in'>Войти</Link>
          </div>
        </div>
      </form>
    </section >
  );
}

export default Register;