import { Link } from "react-router-dom";

const NavBar = ({isMenuActive}) => {
    return(
        <ol className={`w-full h-[0vh] md:h-auto px-4 py-0 bg-primary-5 overflow-hidden transition-all duration-500 ease-out md:w-auto md:flex-[2] flex flex-col md:flex-row md:justify-end gap-2 md:gap-4 absolute md:relative top-16 md:top-[unset] ${isMenuActive && 'h-[100vh] py-4'}`}>
            <li className={`text-sm md:text-base text-grey-1 capitalize font-medium select-none cursor-pointer opacity-0 md:opacity-100 transition-opacity duration-500 ease-out flex items-center ${isMenuActive && 'opacity-100'}`}><Link to={"/"}><span>home</span></Link></li>
            <li className={`text-sm md:text-base text-grey-1 capitalize font-medium select-none cursor-pointer opacity-0 md:opacity-100 transition-opacity duration-500 ease-out flex items-center ${isMenuActive && 'opacity-100'}`}><Link to={"/near-earth_objects"}><span>Near-Earth Objects</span></Link></li>
            <li className={`text-sm md:text-base text-grey-1 capitalize font-medium select-none cursor-pointer opacity-0 md:opacity-100 transition-opacity duration-500 ease-out flex items-center ${isMenuActive && 'opacity-100'}`}><Link to={"/sun"}><span>sun</span></Link></li>
            <li className={`text-sm md:text-base text-grey-1 capitalize font-medium select-none cursor-pointer opacity-0 md:opacity-100 transition-opacity duration-500 ease-out flex items-center ${isMenuActive && 'opacity-100'}`}><Link to={"/article"}><span>article</span></Link></li>
        </ol>
    )
}

export default NavBar;