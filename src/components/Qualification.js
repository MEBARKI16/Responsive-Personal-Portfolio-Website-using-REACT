import '../styles/Qualification.css'
//import {RxCalendar} from 'react-icons/rx'
//import {FaGraduationCap} from 'react-icons/fa'
//import {BsBriefcase} from 'react-icons/bs'
const Qualification = () => {
    return (
        <section className='qualification section'>
            <h2 data-heading='My Journey' className='section__title'>Qualification</h2>
            <div className='qualification__container container grid'>
            <div className='education'>
                <h3 className='qualification__title'><FaGraduationCap /> Education</h3>
                <div className='timeline'>
                 
                  <div className='timeline__item'>
                     <div className='circle__dot'></div>
                     <h3 className='timeline__title'>Frantz Fanon High School (Boumerdes, Boumerdes)</h3>
                     <p className='timeline__text'>Mathematics Bachelor</p>
                     <span className='timeline__date'><RxCalendar /> 2014 - 2015</span>
                  </div>
                  <div className='timeline__item'>
                     <div className='circle__dot'></div>
                     <h3 className='timeline__title'>USTHB University (Bab Ezzouar, Alger)</h3>
                     <p className='timeline__text'>License Information Systems and Software Engineering</p>
                     <span className='timeline__date'><RxCalendar /> 2016 - 2019</span>
                  </div>
                   <div className='timeline__item'>
                     <div className='circle__dot'></div>
                     <h3 className='timeline__title'>USTHB University (Bab Ezzouar, Alger)</h3>
                     <p className='timeline__text'>Master Software Engineering</p>
                     <span className='timeline__date'><RxCalendar /> 2019 - 2021</span>
                  </div>
                </div>
               </div>
               <div className='experience'>
                <h3 className='qualification__title'><BsBriefcase /> Experience</h3>
                <div className='timeline'>
                  <div className='timeline__item'>
                     <div className='circle__dot'></div>
                     <h3 className='timeline__title'>Digit-Med Development</h3>
                     <p className='timeline__text'>Lead / Senior Software Developer</p>
                     <span className='timeline__date'><RxCalendar /> 2021 - Present</span>
                  </div>
                  <div className='timeline__item'>
                     <div className='circle__dot'></div>
                     <h3 className='timeline__title'>CETIM (Boumerdes, Boumerdes)</h3>
                     <p className='timeline__text'>web site / fullstack developer</p>
                     <span className='timeline__date'><RxCalendar /> 2019 - 2021</span>
                  </div>
                  <div className='timeline__item'>
                     <div className='circle__dot'></div>
                     <h3 className='timeline__title'>CETIM (Boumerdes, Boumerdes)</h3>
                     <p className='timeline__text'>junior developer backend</p>
                     <span className='timeline__date'><RxCalendar /> 2016 - 2019</span>
                  </div>
                </div>
               </div>
            </div>
        </section>
    );
}
export default Qualification;