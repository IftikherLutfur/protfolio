import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-black  w-full bg-opacity-45">
            <nav className="bg-opacity-45 shadow">
    <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
       <NavLink to='/'>
       <a href="#" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>

       </NavLink>
        <NavLink to='/projects'>
        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Projects</a>
        </NavLink>

       
<NavLink to='/blogs'>
<a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">blog</a>
</NavLink>

    </div>
</nav>
        </div>
    );
};

export default Navbar;