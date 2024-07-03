import {  } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";
import Banner from "./Components/Banner/Banner";
import Myself from "./Components/MySelf/Myself";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Shared/Footer";
import Blogs from "./Components/Blogs/Blogs";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Myself/>
            <Projects/>
            <Blogs/>
            {/* <Skills/> */}
            {/* <Services/> */}
            <Footer/>
            
        </div>
    );
};

export default Home;