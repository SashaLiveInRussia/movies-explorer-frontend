import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Route } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Error from '../Error/Error'
import { useDispatch } from 'react-redux';
import { getMovies } from '../../utils/MainApi';
import { useEffect } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(getMovies());
		}
	}, [dispatch]);


	return (
		<div className="App">
			<Route exact path="/">
				<Header auth={false} />
				<Main />
				<Footer />
			</Route>

			<Route path="/movies">
				<ProtectedRoute redirect="/signin">
					<Header auth={true} />
					<Movies save={false} />
					<Footer />
				</ProtectedRoute>
			</Route>

			<Route path="/saved-movies">
				<ProtectedRoute redirect="/signin">
					<Header auth={true} />
					<SavedMovies save={true} />
					<Footer />
				</ProtectedRoute>
			</Route>

			<Route path="/signup">
				<Register link='/signin' />
			</Route>

			<Route path="/signin">
				<Login link='/signup' />
			</Route>

			<Route path="/profile">
				<ProtectedRoute redirect="/signin">
					<Profile />
				</ProtectedRoute>
			</Route>

			<Route path="/error">
				<Error />
			</Route>
		</div>
	);
}

export default App;