import '../styles/Contact.css'
import {FaEnvelopeOpenText} from 'react-icons/fa'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {BsWhatsapp, BsMessenger} from 'react-icons/bs'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import {useState} from 'react'
const Contact = () => {
    const [x2, setx2] = useState('');
    

    function focusfunc () {
        let x3 = x2 + 'focus2';
        console.log(x3);
        setx2(x3);
    }
    function blurfunc() {
        let x3 = '';
        console.log('hello1');
        setx2(x3);
    }
    return (
        <section className="contact section" id="contact">
            <h2 data-heading="Get in touch" className="section__title">Contact Me</h2>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__info">
                        <div className="contact__card">
                            <FaEnvelopeOpenText className='contact__card-icon'/>
                            <h3 className='contact__card-title'>Email</h3>
                            <span className='contact__card-data'>medaminemebarki@gmail.com</span>
                            <span className='contact__button'>
                                Write me <MdKeyboardArrowRight />
                            </span>

                        </div>
                        <div className="contact__card">
                            <BsWhatsapp className='contact__card-icon' />
                            <h3 className='contact__card-title'>Whatapp</h3>
                            <span className='contact__card-data'>+213540903349</span>
                            <span className='contact__button'>
                                Write me <MdKeyboardArrowRight />
                            </span>

                        </div>
                        <div className="contact__card">
                            <BsMessenger className='contact__card-icon' />
                            <h3 className='contact__card-title'>Messenger</h3>
                            <span className='contact__card-data'>Med Amine Mebarki</span>
                            <span className='contact__button'>
                                Write me <MdKeyboardArrowRight />
                            </span>

                        </div>

                    </div>

                </div>
            <div className='contact__content'>
                <form action='' className='contact__form'>
                    <div className='input__container'>
                        <input type='text' className='input' />
                        <label className='focus2'>Username</label>
                        <span>Username</span>
                    </div>
                    <div className='input__container'>
                        <input type='email' className='input' onFocus={focusfunc} onBlur={blurfunc}/>
                        <label className={x2}>Email</label>
                        <span>Email</span>
                    </div>
                    <div className='input__container'>
                        <input type='tel' className='input' />
                        <label className={x2}>Phone</label>
                        <span>Phone</span>
                    </div>
                    <div className='input__container textarea'>
                       <textarea name='' id=''  className='input' ></textarea>
                        <label className={x2}>Message</label>
                        <span>Message</span>
                    </div>
                    <button type='submit' ><BsFillArrowRightSquareFill  className='contact__button-icon' />
                       Send Message
                    </button>
                </form>
            </div>    

            </div>

        </section>
    );
}
export default Contact;