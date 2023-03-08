import '../styles/Footer.css'
import {FaFacebook} from 'react-icons/fa'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__bg'>
                <div className='footer__container container grid'>
                    <div>
                        <h1 className='footer__title'>Amine</h1>
                        <span className='footer__subtitle'>Fullstack Developer</span>
                    </div>
                    <ul className='footer__links'>
                        <li>
                            <a href='#services' className='footer__link'>Services</a>
                        </li>
                        <li>
                            <a href='#Work' className='footer__link'>Work</a>
                        </li>
                        <li>
                            <a href='#Contact' className='footer__link'>Contact</a>
                        </li>

                    </ul>
                    <div className='footer__socials'>
                    <a href="https://www.facebook.com/" className="footer__social">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/" className="footer__social">
                        <BsInstagram />
                    </a>
                    <a href="https://www.twitter.com/" className="footer__social">
                        <BsTwitter />
                    </a>
                    </div>

                </div>
                <p className='footer__copy'>&#169; Crypticalcoder. All right reserved</p>
            </div>

        </footer>
    );
}
export default Footer;