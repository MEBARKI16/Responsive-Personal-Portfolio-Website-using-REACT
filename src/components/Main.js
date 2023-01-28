import Home from "./Home";
import '../styles/Main.css'
import '../styles/Reusable-css-classes.css'
import About from "./About";
const Main = () => {
    return (
        <div className="main">
           <Home />
           <About />
        </div>
    );

}
export default Main;