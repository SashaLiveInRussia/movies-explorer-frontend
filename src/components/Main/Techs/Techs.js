import './Techs.css';
import SectionHeader from '../SectionHeader/SectionHeader'

function Techs() {
    return (
        <section className="techs">
        <SectionHeader title='Технологии'/>
        <div className='techs__body'>
            <h1>7 технологий</h1>
            <p className='main__about-description techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <div className='techs__list'>
            <div className='techs__techs-list'>HTML</div>
            <div className='techs__techs-list'>CSS</div>
            <div className='techs__techs-list'>JS</div>
            <div className='techs__techs-list'>React</div>
            <div className='techs__techs-list'>Git</div>
            <div className='techs__techs-list'>Express.js</div>
            <div className='techs__techs-list'>mongoDB</div>
        </div>
        </section >
    );
}

export default Techs;