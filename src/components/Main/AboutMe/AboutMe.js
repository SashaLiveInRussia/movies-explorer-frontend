/* eslint-disable jsx-a11y/alt-text */
import './AboutMe.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import photo from '../../../images/profil_photo.jpg';

function AboutMe() {
	return (
		<section className='about-me'>
			<SectionHeader title='Студент' />
			<div className='about-me__content'>
				<div className='about-me__body'>
					<h1 className='about-me__head'>Виталий</h1>
					<p className='about-me__title'>Фронтенд-разработчик, 30 лет</p>
					<p className='about-me__subtitle'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
						и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
				</div>
				<div className='about-me__photo'> <img src={photo} /> </div>
			</div>
			<div className='about-me__link'>Github</div>
		</section >
	);
}

export default AboutMe;