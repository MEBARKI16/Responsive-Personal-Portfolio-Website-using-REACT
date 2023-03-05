import {FaRegTimesCircle} from 'react-icons'
const ServicesModal = () => {
    return (
        <div className="services__button">
            <div className="services__modal-content">
                <FaRegTimesCircle  className="services__modal-close"/>
                <h3 className='services__modal-title'>Web Designer</h3>
                <p className='services__modal-description'>
                   Services with more than 3 years of experience.
                   Providing quality work to clients and companies I develop the user interface
                </p>

            </div>

        </div>
    );
}
export default ServicesModal;