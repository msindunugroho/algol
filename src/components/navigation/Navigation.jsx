import { useCallback } from "react";
import NavBar from "./nav_bar/NavBar";
import NavHeader from "./nav_header/NavHeader";
import { useState } from "react";

const Navigation = () => {
    const [menuActive, setMenuActive] = useState(false);

    const menuHandler = useCallback(() => {
        setMenuActive(prevState => !prevState);
    }, [menuActive])
    return(
        <nav className="fixed top-0 left-0 right-0 z-[10]">
            <div className="nav_container w-full h-16 bg-primary-5 relative md:flex justify-between">
                <NavHeader
                isMenuActive={menuActive}
                onClick={menuHandler}/>
                <NavBar
                isMenuActive={menuActive}/>
            </div>
        </nav>
    );
}

export default Navigation;