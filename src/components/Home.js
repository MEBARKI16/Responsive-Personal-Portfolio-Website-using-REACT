import '../styles/Home.css'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
//import { BiUser } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { BsMessenger } from 'react-icons/bs'
import { FaEnvelopeOpenText } from 'react-icons/fa'
const Home = () => {
    let x = { fontSize:'1.8rem', color:'var(--skin-color)', marginRight:'var(--mb-0-75)'};
return (
    <section className="home" id="home">
        <div className="home__container container grid">
            <div className="home__social">
                <span className="home__social-follow">Follow Me</span>
                <div className="home__social-links">
                    <a href="https://www.facebook.com/" className="home__social-link">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/" className="home__social-link">
                        <BsInstagram />
                    </a>
                    <a href="https://www.twitter.com/" className="home__social-link">
                        <BsTwitter />
                    </a>
                </div>
            </div>
            <div className='div1'>
                <div className='div2'></div>
                <div className='div3'>
                    <div className='home__data'>
                        <h1 className='home__title'>Hi, I'am Amine</h1>
                        <h3 className='home__subtitle'>Software developer</h3>
                        <p className='home__description'>High level experiece in web development and design knowledge, producing quality work.</p>
                        <a href='#about' className='button'><BiUser />More About Me</a>
                    </div>
                    <div className='my__info'>
                        <div className='info__item'>
                            <BsMessenger style={x} />
                            <div>
                                <h3 className='info__title'>Messenger</h3>
                                <span className='info__subtitle'>Med Amine Mebarki</span>
                            </div>

                        </div>
                        <div className='info__item'>
                            <BsWhatsapp style={x} />
                            <div>
                                <h3 className='info__title'>Whatapp</h3>
                                <span className='info__subtitle'>+213540903349</span>
                            </div>

                        </div>
                        <div className='info__item'>
                            <FaEnvelopeOpenText style={x}/>
                            <div>
                                <h3 className='info__title'>Email</h3>
                                <span className='info__subtitle'>medaminemebarki@gmail.com</span>
                            </div>

                        </div>
                    </div></div>

            </div>
        </div>

    </section>
);
}
export default Home;