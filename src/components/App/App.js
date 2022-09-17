import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
          <Main />
      </Route>

      <Route path="/movies">
        <Movies />
      </Route>
    </div>
  );
}

export default App;