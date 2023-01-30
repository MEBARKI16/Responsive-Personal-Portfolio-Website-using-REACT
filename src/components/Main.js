import Home from "./Home";
import About from "./About";
import Qualification from "./Qualification";
import Skills from "./Skills";
import '../styles/Main.css'
import '../styles/Reusable-css-classes.css'

const Main = () => {
    return (
        <div className="main">
           <Home />
           <About />
           <Qualification />
           <Skills />
        </div>
    );

}
export default Main;