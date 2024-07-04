import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {

    const download = () =>{
        console.log('clicked');
        const fileUrl = "https://i.ibb.co/BwvtZN4/Screenshot-2348.png";
        (fileUrl)
    }


    return (
        <div className="bg-purple-950 text-white">
           <div className="flex justify-around items-center px-4 py-4">
           <div className="">
             <p className="text-xl font-semibold mb-1">I am Iftikher Lutfur Abdullah</p>
             <h1 className="text-4xl font-bold mb-2">Web Developer</h1>
             <p className="font-semibold opacity-85">A Passionate Front End Web Developer</p>
             <div className=" flex items-center gap-10 mt-10">
                <button><a href="https://docs.google.com/document/d/1yuDseJ3ZaXH_C2wzgtr8xDYJ16dssijGwBzpahEc3uo/edit?usp=sharing" onClick={download} className="btn border-2 rounded-lg text-purple-300 border-purple-400 p-2">Download CV</a></button>
                <p className="text-purple-300"><a href="https://www.facebook.com/Iftikherlutfur"><FaFacebook/></a></p>
                <p className="text-purple-300"><a href="https://www.linkedin.com/in/iftikher-lutfur-094a41256/"><FaLinkedin/></a></p>
                <p className="text-purple-300"><a href="https://github.com/IftikherLutfur"><FaGithub/></a> </p>
                
             </div>
            </div>
            <div className="">
                <img className="w-[280px] h-[300px] animate__animate__animated animate__bounce rounded-full border-2 border-purple-300 bg-black" src="https://i.ibb.co/VQsK1KD/Background-2024-07-02-T140621-663.png" alt="" />
            </div>
           </div>
        </div>
    );
};

export default Banner;