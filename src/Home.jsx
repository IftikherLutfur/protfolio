import {  } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";
import Banner from "./Components/Banner/Banner";
import Services from "./Components/Servoces/Services";
import Myself from "./Components/MySelf/Myself";
import Skills from "./Components/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Myself/>
            <Skills/>
            <Services/>
            
        </div>
    );
};

export default Home;