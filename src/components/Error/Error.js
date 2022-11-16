import '../Error/Error.css';
import { Link } from 'react-router-dom';

function Error() {
	return (
		<section className='error'>
			<div className='error__contain'>
				<div className='error__name'>404</div>
				<div className='error__text'>Страница не найдена</div>
				<div className='error__back'><Link to='/' className='error__back'>Назад</Link></div>
			</div>
			
		</section >
	);
}

export default Error;