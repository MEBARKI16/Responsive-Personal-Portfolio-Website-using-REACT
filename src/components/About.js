//import { TbAward } from 'react-icons/tb'
//import { GiSuitcase } from 'react-icons/gi'
//import { FiHeadphones } from 'react-icons/fi'
import '../styles/About.css'
import img from '../imgs/amine2.jpg'
const About = () => {
    let x = {fontSize :'1.5rem' , color : 'var(--skin-color)', marginBottom : 'var(--mb-0-75)'};
    return (
        <section className="about section" id="about">
          <h2 data-heading="My Intro" className="section__title">About Me</h2>
          <div className="about__container container grid">
            <img src={img} alt="" className="about__img"/>
            <div className="about__data">
                <h3 className="about__heading">Hi, I'm Amine MEBARKI, Based in Algeria</h3>
                <p className="about__description">Software developer, with extensive kniwledge and years of experience,
                working in web technologies and UI/UX design, delivering quality work.</p>
                <div className="about__info grid">
                    <div className="about__box">
                      <TbAward style={x} />
                      <h3 className='about__title'>Experience</h3>
                      <span className='about__subtitle'>5 + Years</span>
                    </div>
                    <div className="about__box">
                      <GiSuitcase style={x}/>
                      <h3 className='about__title'>Completed</h3>
                      <span className='about__subtitle'>48 + Projects</span>
                    </div>
                    <div className="about__box">
                      <FiHeadphones style={x}/>
                      <h3 className='about__title'>Support</h3>
                      <span className='about__subtitle'>Online 24/7</span>
                    </div>
                </div>
                <a href='#contact'>Contact Me</a>
            </div>
          </div>
        </section>
    ) ;
}
export default About;