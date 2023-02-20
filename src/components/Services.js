import '../styles/Services.css'
//import {FaConnectdevelop} from 'react-icons/fa'
//import {MdKeyboardArrowRight} from 'react-icons/md'
const Services = () => {
    const x = {display:'block' ,fontSize:'1.8rem' , color:'var(--skin-color)', marginBottom:'var(--md-1)' }
    return (
        <section className='services section' id='services'>
          <h2 data-heading='Services' className='section__title'>What I Offer</h2>
          <div className='services__container container grid'>
            <div className='services__content'>
               <div>
                   <FaConnectdevelop style={x}/>
                   <h3 className='services__title'>Web <br />Designer<br /></h3>
               </div>
               <span className='services__button'>
                  View More <MdKeyboardArrowRight className='services__button-icon'/>
               </span>
            </div>
            <div className='services__content'>
               <div>
                   <FaConnectdevelop style={x}/>
                   <h3 className='services__title'>Web <br />Designer<br /></h3>
               </div>
               <span className='services__button'>
                  View More <MdKeyboardArrowRight className='services__button-icon'/>
               </span>
            </div>
            <div className='services__content'>
               <div>
                   <FaConnectdevelop style={x} />
                   <h3 className='services__title'>Web <br />Designer<br /></h3>
               </div>
               <span className='services__button'>
                  View More <MdKeyboardArrowRight className='services__button-icon' />
               </span>
            </div>
          </div>
        </section>
    );
}
export default Services;