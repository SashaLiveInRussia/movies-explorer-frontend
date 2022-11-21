import '../Register/Register.css';
import { Link, useHistory } from 'react-router-dom';
import { register } from '../../utils/MainApi';
import { useState } from 'react';

function Register({ link }) {
  const [form, setForm] = useState({});
  const history = useHistory();

  function handleReg() {
    register(form);
    history.push('/movies');
  }

  function handleChange(event) {
   setForm(oldForm => ({...oldForm, [event.target.name]: event.target.value})) 
  }

  return (
    <section className='reg'>
      <form onSubmit={handleReg} className='reg__contain'>
        <Link to='/' className='reg__logo'></Link>
        <h2 className=''>Добро пожаловать!</h2>
        <div className='reg__form'>
          <label className='reg__form'>
            <div className='reg__name-form'>Имя</div>
            <input name="name" className='reg__input' onChange={handleChange} />
          </label>
          <label>
            <div className='reg__name-form' onChange={handleChange}>E-mail</div>
            <input name="email" className='reg__input' type="email" />
          </label>
          <label>
            <div className='reg__name-form' >Пароль</div>
            <input name="password" className='reg__input' onChange={handleChange} type="password" />
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