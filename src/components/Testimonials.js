import {FaQuoteLeft} from 'react-icons/fa'
import '../styles/Testimonials.css'
import img1 from '../imgs/img1.jpg'
import img2 from '../imgs/img2.jpg'
import img3 from '../imgs/img3.png'
import React, {useRef, useEffect} from 'react';
import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.min.css';

const Testimonials = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        const swiper = swiperRef.current? new Swiper(swiperRef.current, {
                spaceBetween: 24,
                Loop: true,
                grabCursor: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                  },
                  breakpoints: {
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                  }
            }): undefined;
            return () => {
                if (swiper) {
                    swiper.destroy();
                }
            }
        }
    , []);
    return (
        <section className="testimonials section">
            <h2 data-heading="My clients say" className="section__title">Testimonials</h2>
            <div ref={swiperRef} className="testimonials__container container swiper">
                <div className='swiper-wrapper'>
                    <div className="testimonial__card swiper-slide">
                        <div className="testimonial__quote">
                                <FaQuoteLeft />
                        </div>
                        <p className='testimonial__description'>lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Exercitationem quaerat ducimus ea.</p>
                         <h3 className='testimonial__date'>March 27 . 2020</h3>
                         <div className='testimonial__profile'>
                            <img src={img1} alt='' className='testimonial__profile-img' />
                            <div className='testimonial__profile-data'>
                                <span className='testimonial__profile-name'>Lee Doe </span>
                                <span className='testimonial__profile-detail'>Director of a company</span>
                            </div>
                         </div>
                    </div>
                    <div className="testimonial__card swiper-slide">
                        <div className="testimonial__quote">
                                <FaQuoteLeft />
                        </div>
                        <p className='testimonial__description'>lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Exercitationem quaerat ducimus ea.</p>
                         <h3 className='testimonial__date'>March 27 . 2020</h3>
                         <div className='testimonial__profile'>
                            <img src={img2} alt='' className='testimonial__profile-img' />
                            <div className='testimonial__profile-data'>
                                <span className='testimonial__profile-name'>Lee Doe </span>
                                <span className='testimonial__profile-detail'>Director of a company</span>
                            </div>
                         </div>
                    </div>
                    <div className="testimonial__card swiper-slide">
                        <div className="testimonial__quote">
                                <FaQuoteLeft />
                        </div>
                        <p className='testimonial__description'>lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Exercitationem quaerat ducimus ea.</p>
                         <h3 className='testimonial__date'>March 27 . 2020</h3>
                         <div className='testimonial__profile'>
                            <img src={img3} alt='' className='testimonial__profile-img' />
                            <div className='testimonial__profile-data'>
                                <span className='testimonial__profile-name'>Lee Doe </span>
                                <span className='testimonial__profile-detail'>Director of a company</span>
                            </div>
                         </div>
                    </div> 
                </div>
                <div className="swiper-pagination"></div>
                
            </div>
        </section>
    );
}
export default Testimonials;