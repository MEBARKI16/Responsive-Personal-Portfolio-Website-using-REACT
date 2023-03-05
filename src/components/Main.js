import Home from "./Home";
import About from "./About";
import Qualification from "./Qualification";
import Skills from "./Skills";
import Services from "./Services";
import Testimonials from "./Testimonials";
import '../styles/Main.css'
import '../styles/Reusable-css-classes.css'

const Main = () => {
    return (
        <div className="main">
           <Home />
           <About />
           <Qualification />
           <Skills />
           <Services />
           <Testimonials />
        </div>
    );

}
export default Main;