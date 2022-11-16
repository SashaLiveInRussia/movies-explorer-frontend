import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Main() {
  return (
    <>
      <div className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </div >
    </>
  );
}

export default Main;