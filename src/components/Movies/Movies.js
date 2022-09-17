import './Movies.css';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';


// const cards = [
//     {
//         img: '/images/',
//     }
// ];

function Movies() {
    return (
        <>
            <Header auth={true} />
            <SearchForm />
        </>
    );
}

export default Movies;