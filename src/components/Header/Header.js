import './Header.css';
import logo from '../../images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header({ auth }) {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(m => !m);
  }


  return (
    <header>
      {auth === false && (
        <div className={'header'}>
          <Link className='header__logo' to='/'><img alt='' src={logo} /></Link>
          <div className='header__auth'>
            <Link className='header__reg' to='/signup'>Регистрация</Link>
            <div className='header__login-background'>
              <Link className='header__login' to='/signin'>Войти</Link>
            </div>
          </div>
        </div>
      )}

      {auth === true && (
        <div className={"header" + (menu ? ' header__open' : '')}>
          <Link className="header__logo" to='/'><img alt='' src={logo} /></Link>
          <button onClick={toggleMenu} className='header__burger'>
            <svg width="40" height="43" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M31 15L9 15V12.5L31 12.5V15Z" fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M31 24L9 24V21.5L31 21.5V24Z" fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M31 33L9 33V30.5L31 30.5V33Z" fill="black" />
            </svg>
          </button>
          <div className="header__menu">
            <button onClick={toggleMenu} className='header__burger'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7.16016" y="9.28249" width="3" height="22" transform="rotate(-45 7.16016 9.28249)" fill="black" />
                <rect x="22.7168" y="7.16117" width="3" height="22" transform="rotate(45 22.7168 7.16117)" fill="black" />
              </svg>
            </button>
            <div className='header__films'>
              <NavLink activeClassName="header__film-active" to='/' exact className='header__film header__film-main'>Главная</NavLink>
              <NavLink activeClassName="header__film-active" to='/movies' className='header__film'>Фильмы</NavLink>
              <NavLink activeClassName="header__film-active" to='/saved-movies' className='header__film'>Сохранённые фильмы</NavLink>
            </div>
            <div className='header__account-background'>
              <NavLink className='header__auth' to='/profile'>Аккаунт</NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;