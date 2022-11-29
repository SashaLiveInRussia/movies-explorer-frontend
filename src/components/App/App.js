import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Route, Switch } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Error from '../Error/Error'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../utils/MainApi';
import { useEffect } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
	const dispatch = useDispatch();
	const auth = useSelector(state => state.auth);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(getMovies());
		}
	}, [dispatch]);


	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Header auth={auth} />
					<Main />
					<Footer />
				</Route>

				<Route path="/movies">
					<ProtectedRoute auth={true} redirect="/">
						<Header auth={true} />
						<Movies save={false} />
						<Footer />
					</ProtectedRoute>
				</Route>

				<Route path="/saved-movies">
					<ProtectedRoute auth={true} redirect="/">
						<Header auth={true} />
						<SavedMovies save={true} />
						<Footer />
					</ProtectedRoute>
				</Route>

				<Route path="/signup">
					<ProtectedRoute auth={false} redirect="/movies">
						<Register link='/signin' />
					</ProtectedRoute>
				</Route>

				<Route path="/signin">
					<ProtectedRoute auth={false} redirect="/movies">
						<Login link='/signup' />
					</ProtectedRoute>
				</Route>

				<Route path="/profile">
					<ProtectedRoute auth={true} redirect="/">
						<Profile />
					</ProtectedRoute>
				</Route>

				<Route path="*">
					<Error />
				</Route>
			</Switch>
		</div>
	);
}

export default App;