import '../Profile/Profile.css';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useFormWithValidation } from '../../utils/useFormValidation';
import { logout, updateProfile } from '../../utils/MainApi';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import logoutStorage from '../../utils/logoutStorage';

function Profile() {
   const history = useHistory();
   const currentUser = useSelector(state => state.currentUser);
   const { values, isValid, errors, handleChange, resetForm } = useFormWithValidation();
   const dispatch = useDispatch();

   useEffect(() => {
      resetForm(currentUser, {}, true);
   }, [resetForm, currentUser]);


   function handleSubmit(event) {
      event.preventDefault();
      console.log(values);
      dispatch(updateProfile(values))
   }

   function handleLogout() {
      logoutStorage();

      dispatch(logout())
         .then(() => {
            history.push('/');
         })
   }

   console.log(errors);

   return (
      <>
         <Header auth={true} />
         <section className='reg'>
            <form onSubmit={handleSubmit} className='profile__contain'>
               <h2 className=''>Привет, {currentUser.name}</h2>
               <div className='profile__info'>
                  <div className='profile__info-text'>
                     <div className='profile__name'>Имя</div>
                     <input required className='profile__input' name="name" defaultValue={currentUser.name} onChange={handleChange} />
                     {errors.name && <span className="profile__input_error">{errors.name}</span>}
                  </div>
               </div>

               <hr className='profile__hr' />

               <div className='profile__info-text'>
                  <div className='profile__name' >E-mail</div>
                  <input className='profile__input' type="email" name="email" defaultValue={currentUser.email} onChange={handleChange} />
                  {errors.email && <span className="profile__input_error">{errors.email}</span>}
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

