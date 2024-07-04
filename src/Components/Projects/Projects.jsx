import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


const Projects = () => {
    return (
        <div className="mb-5">
            
            <h1 className="text-4xl font-bold text-white text-center uppercase my-10">my recent projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 lg:ml-0">
            <div className="mx-5 w-96">
            <div className="max-w-lg p-4 shadow-md bg-black">
	<div className="space-y-4">
		<div className="space-y-2">
			<img  src="https://i.ibb.co/6PGqH7P/Screenshot-2352.png" alt="" className="block object-cover object-center w-full rounded-md dark:bg-gray-500" />
		</div>
		<div className="">
		
				<h3 className="text-xl font-semibold text-orange-400">Unique Time</h3>
                <p className="text-white my-2">Using technology in this projects</p>
                <ol className="text-white grid grid-cols-4">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind</li>
                    <li>JavaScript</li>
                    <li>React JS</li>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                </ol>
			<div className="text-white flex mx-10 gap-6 my-5">
            <a className="btn flex items-center gap-1" href="https://unique-time.web.app/">
            <span><TbWorld/></span><span>Visit</span>
            </a>
            <a className="flex item-center gap-1" href="https://github.com/IftikherLutfur/unique-time-client"><span><FaGithub/></span><span>Client</span></a>
            <a className="flex item-center gap-1" href="https://github.com/IftikherLutfur/unique-time-server"><span><FaGithub/></span><span>Server</span></a>

            </div>
		</div>
	</div>
</div>
            </div>
            
            <div className="mx-5 w-96">
            <div className="max-w-lg p-4 shadow-md bg-black">
	<div className="space-y-4">
		<div className="space-y-2">
			<img  src="https://i.ibb.co/fD5xNH9/Screenshot-2362.png" alt="" className="block object-cover object-center w-full rounded-md dark:bg-gray-500" />
		</div>
		<div className="">
		
				<h3 className="text-xl font-semibold text-orange-400">Grand Hotel</h3>
                <p className="text-white my-2">Using technology in this projects</p>
                <ol className="text-white grid grid-cols-4">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind</li>
                    <li>JavaScript</li>
                    <li>React JS</li>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                </ol>
			<div className="text-white flex mx-10 gap-6 my-5">
            <a className="btn flex items-center gap-1" href="https://hotel-booking-service-250b8.web.app/">
            <span><TbWorld/></span><span>Visit</span>
            </a>
            <a className="flex item-center gap-1" href="https://github.com/IftikherLutfur/hotel-booking-client"><span><FaGithub/></span><span>Client</span></a>
            <a className="flex item-center gap-1" href="https://github.com/IftikherLutfur/hotel-booking-server"><span><FaGithub/></span><span>Server</span></a>

            </div>
		</div>
	</div>
</div>
            </div>
            <div className="mx-5 w-96">
            <div className="max-w-lg p-4 shadow-md bg-black">
	<div className="space-y-4">
		<div className="space-y-2">
			<img  src="https://i.ibb.co/YhP2xbY/Screenshot-2364.png" alt="" className="block object-cover object-center w-full rounded-md dark:bg-gray-500" />
		</div>
		<div className="">
		
				<h3 className="text-xl font-semibold text-orange-400">Residential Estate</h3>
                <p className="text-white my-2">Using technology in this projects</p>
                <ol className="text-white grid grid-cols-4">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind</li>
                    <li>JavaScript</li>
                    <li>React JS</li>
                    <li>Firebase</li>
                </ol>
			<div className="text-white flex mx-10 justify-evenly gap-6 my-5">
            <a className="btn flex items-center gap-1" href="https://residential-estate--project.web.app/">
            <span><TbWorld/></span><span>Visit</span>
            </a>
            <a className="flex item-center gap-1" href="https://github.com/IftikherLutfur/residential-hotel"><span><FaGithub/></span><span>GitHub</span></a>
           

            </div>
		</div>
	</div>
</div>
            </div>
            </div>


            
         </div>
    );
};

export default Projects;