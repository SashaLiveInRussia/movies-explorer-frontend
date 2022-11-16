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

function App() {
	return (
		<div className="App">
			<Route exact path="/">
				<Header auth={false} />
				<Main />
				<Footer />
			</Route>

			<Route path="/movies">
				<Header auth={true} />
				<Movies save={false} />
				<Footer />
			</Route>

			<Route path="/saved-movies">
				<Header exact page='/' save="/saved-movies" movie="/movies" auth={true} />
				<SavedMovies save={true} />
				<Footer />
			</Route>

			<Route path="/signup">
				<Register link='/signin'/>
			</Route>

			<Route path="/signin">
				<Login link='/signup'/>
			</Route>

			<Route path="/profile">
				<Profile />
			</Route>

			<Route path="/error">
				<Error />
			</Route>
		</div>
	);
}

export default App;