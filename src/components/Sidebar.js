import "../styles/Sidebar.css";
//import {BiShareAlt} from 'react-icons/bi';
const Sidebar = () => {
    return (
        <aside className="sidebar" id="sidebar">
            <nav className="nav">
               <div className="nav__logo">
                   <a href="../index.html" className="nav__logo-text">M</a>
               </div>
               <div className="nav__menu">
                <div className="menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                          <a href="#home" className="nav__link active-link">Home</a>
                        </li>
                        <li className="nav__item">
                          <a href="#about" className="nav__link">About</a>
                        </li>
                        <li className="nav__item">
                          <a href="#skills" className="nav__link">Skills</a>
                        </li>
                        <li className="nav__item">
                          <a href="#work" className="nav__link">Work</a>
                        </li>
                        <li className="nav__item">
                          <a href="#services" className="nav__link">Services</a>
                        </li>
                        <li className="nav__item">
                          <a href="#contact" className="nav__link">Contact</a>
                        </li>
                    </ul>

                </div>

               </div>
               <div className="btn__share">
               <BiShareAlt fontSize='2rem' />
               </div>
            </nav>
        </aside>
    );
}
export default Sidebar;