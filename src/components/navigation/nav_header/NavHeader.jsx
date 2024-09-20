/* eslint-disable react/prop-types */
const NavHeader = ({onClick, isMenuActive}) => {
    return(
        <header className="w-full h-full px-6 flex md:flex-1">
            <div className="brand flex-1 flex justify-start items-center">
                <p className="text-2xl text-clip_quaternary-tertiary uppercase font-bold">algol</p>
            </div>
            <div className="menu flex-1 flex justify-end items-center md:hidden">
                <button 
                type="button" 
                className="w-[30px] h-[30px] bg-tertiary-5 relative p-[4px] cursor-pointer rounded-sm flex flex-col justify-around items-end"
                onClick={onClick}>
                <span className={`w-11/12 h-[3px] bg-grey-3 rounded-[2px] ${isMenuActive && 'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[45deg]' }`}></span>
                <span className={`w-6/12 h-[3px] bg-grey-3 rounded-[2px] ${isMenuActive && 'hidden' }`}></span>
                <span className={`w-10/12 h-[3px] bg-grey-3 rounded-[2px] ${isMenuActive && 'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[-45deg]' }`}></span>
                </button>
            </div>
        </header>
    )
}

export default NavHeader;