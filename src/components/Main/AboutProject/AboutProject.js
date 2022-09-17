import './AboutProject.css';
import SectionHeader from '../SectionHeader/SectionHeader';

function AboutProject() {
    return (
        <section className='about-project'>
            <SectionHeader title='О проекте'/>
            <div className='about__content'>
                <div className='about__description'>
                    <h3 className='about__description-title'>Дипломный проект включал 5 этапов</h3>
                    Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                </div>
                <div className='main__about-description'>
                    <h3 className='about__description-title'>На выполнение диплома ушло 5 недель</h3>
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                </div>
            </div>
            <div className='about__lines'>
                <div className='about__line-left'>
                    <div className='about__line-green'>1 неделя</div>
                    <div>Back-end</div>
                </div>
                <div className='about__line-right'>
                    <div className='about__line-grey'>4 недели</div>
                    <div>Front-end</div>
                </div>
            </div>

        </section>
    );
}

export default AboutProject;