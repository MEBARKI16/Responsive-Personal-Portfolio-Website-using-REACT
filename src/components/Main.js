import Home from "./Home";
import About from "./About";
import Qualification from "./Qualification";
import '../styles/Main.css'
import '../styles/Reusable-css-classes.css'

const Main = () => {
    return (
        <div className="main">
           <Home />
           <About />
           <Qualification />
        </div>
    );

}
export default Main;