import {  } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";
import Banner from "./Components/Banner/Banner";
import Myself from "./Components/MySelf/Myself";
import Projects from "./Components/Projects/Projects";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Myself/>
            <Projects/>
            {/* <Skills/> */}
            {/* <Services/> */}
            
        </div>
    );
};

export default Home;