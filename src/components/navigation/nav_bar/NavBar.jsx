import { Link } from "react-router-dom";

const NavBar = ({isMenuActive}) => {
    return(
        <ol className={`w-full h-[0vh] md:h-auto px-4 py-0 bg-primary-5 overflow-hidden transition-all duration-500 ease-out md:w-auto md:flex-[2] flex flex-col md:flex-row md:justify-end gap-2 md:gap-4 absolute md:relative top-16 md:top-[unset] ${isMenuActive && 'h-[100vh] py-4'}`}>
            <li className={`text-sm md:text-base text-grey-1 capitalize font-medium select-none cursor-pointer opacity-0 md:opacity-100 transition-opacity duration-500 ease-out flex items-center ${isMenuActive && 'opacity-100'}`}><Link to={"/"}></Link><i className="bi bi-house text-base mr-2"></i><span>home</span></li>
            <li className={`text-sm md:text-base text-grey-1 capitalize font-medium select-none cursor-pointer opacity-0 md:opacity-100 transition-opacity duration-500 ease-out flex items-center ${isMenuActive && 'opacity-100'}`}><Link to={"/near-earth_objects"}></Link><i className="bi bi-broadcast text-base mr-2"></i><span>Near-Earth Objects</span></li>
            <li className={`text-sm md:text-base text-grey-1 capitalize font-medium select-none cursor-pointer opacity-0 md:opacity-100 transition-opacity duration-500 ease-out flex items-center ${isMenuActive && 'opacity-100'}`}><Link to={"/sun"}></Link><i className="bi bi-bar-chart text-base mr-2"></i><span>sun</span></li>
            <li className={`text-sm md:text-base text-grey-1 capitalize font-medium select-none cursor-pointer opacity-0 md:opacity-100 transition-opacity duration-500 ease-out flex items-center ${isMenuActive && 'opacity-100'}`}><Link to={"/article"}></Link><i className="bi bi-layout-text-window-reverse text-base mr-2"></i><span>article</span></li>
        </ol>
    )
}

export default NavBar;