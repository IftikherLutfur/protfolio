import {  MdWebAsset } from "react-icons/md";

const Right = () => {
    return (
        <div className="text-black bg-slate-200 px-10">
             <div className="my-5">
            <h1 className="text-4xl font-bold">ABOUT ME</h1>
            <p className="text-xl font-semibold mt-3">Hi, There! I am Iftikher Lutfur Abdullah </p>
            <p className="text-pink-600 font-semibold">Front End Web Developer</p>
            <p className="font-semibold my-3">I am a dedicated and passionate front-end web developer, continuously updating my skills with the latest technologies. I always love writing clean and efficient code and strive to create my projects to a high standard. I enjoy taking on new challenges and exploring new technologies.</p>
            <div>
            
            <p className="flex text-black font-semibold item-center my-3 gap-1">
            <span className="mr-2">Birthday</span> : <span className="ml-3 opacity-85">10-10-2005</span></p>
            <p className="flex text-black font-semibold item-center my-3 gap-1">
            <span className="mr-5">Phone</span> : <span className="ml-3 opacity-85">+8801966-095405</span></p>

            <p className="flex text-black font-semibold item-center my-3 gap-1">
            <span className="mr-[27px]">Email</span> : <span className="ml-3 opacity-85">iftikherlutfur@gmail.com</span></p>

            <p className="flex text-black font-semibold  item-center my-3 gap-1">
            <span className="mr-2">Address</span> : <span className="ml-3 opacity-85">Habiganj, Sylhet Bangladesh</span></p>
           
            <p className="flex text-black item-center my-3 gap-1"><MdWebAsset/>www.protfolio</p>
            </div>
            </div>
            <hr />

            <div className="mt-10">
            <h1 className="text-4xl mb-4 font-bold uppercase">education</h1>
           <div className="my-2">
           <h1 className="text-2xl font-semibold">Diploma in Computer Science & Technology</h1>
            <p className="font-semibold opacity-85">2021-22 - Current</p>
            <p className="font-semibold opacity-85">Habiganj Polytechnic Institute</p>
           </div>

           <div>
           <h1 className="text-2xl font-semibold">SSC</h1>
            <p className="font-semibold opacity-85">2021</p>
            <p className="font-semibold opacity-85">Daksinacharan Pilot High School</p>
           </div>
            </div>
            <br /><br />

        </div>
    );
};

export default Right;