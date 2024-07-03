import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="bg-purple-950 text-white">
           <div className="flex justify-around items-center px-4 py-4">
           <div className="">
             <p className="text-xl font-semibold mb-1">I am Iftikher Lutfur Abdullah</p>
             <h1 className="text-4xl font-bold mb-2">Web Developer</h1>
             <p className="font-semibold opacity-85">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
             <div className=" flex items-center gap-10 mt-10">
                <p><a className="btn border-2 rounded-lg text-purple-300 border-purple-400 p-2">Download CV</a></p>
                <p className="text-purple-300"><a href=""><FaFacebook/></a></p>
                <p className="text-purple-300"><a href=""></a><FaLinkedin/></p>
                <p className="text-purple-300"><a href=""></a><FaGithub/></p>
                
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