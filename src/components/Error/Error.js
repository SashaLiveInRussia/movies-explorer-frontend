import '../Error/Error.css';
import { useHistory } from 'react-router-dom';

function Error() {
	const history = useHistory();
	return (
		<section className='error'>
			<div className='error__contain'>
				<div className='error__name'>404</div>
				<div className='error__text'>Страница не найдена</div>
				<button onClick={() => history.goBack()} className='error__back'>Назад</button>
			</div>

		</section >
	);
}

export default Error;