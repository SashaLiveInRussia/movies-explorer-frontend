import './Header.css';
import logo from '../../images/logo.svg'

function Header({ auth }) {
    return (
        <header>
            <div className="header">
                <div><img src={logo} className='header__logo' /></div>
                {auth === false && (
                    <div className='header__auth'>
                        <div className='header__reg'>Регистрация</div>
                        <div className='header__login-background'>
                            <div className='header__login'>Войти</div>
                        </div>
                    </div>
                )}
                {auth === true && (
                    <div className='header__auth'>
                    <div className='header__reg'>fdsdasdsad</div>
                    <div className='header__login-background'>
                        <div className='header__login'>asdadsads</div>
                    </div>
                </div>
                )}
            </div>
        </header>
    );
}

export default Header;