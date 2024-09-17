/* eslint-disable react/prop-types */

const Header = ({textContent_title, custom_title, textContent_firstDesc, custom_firstDesc, textContent_secondDesc, custom_secondDesc}) => {
    return(
        <header>
            <h1 
            className={` text-xl md:text-2xl text-grey-1 font-bold uppercase ${custom_title && custom_title} ${textContent_title || 'hidden'}`}
            >{textContent_title}</h1>
            <p
            className={` text-sm md:text-base text-grey-3 capitalize font-medium ${custom_firstDesc && custom_firstDesc} ${textContent_firstDesc || 'hidden'}`}
            >{textContent_firstDesc}</p>
            <p
            className={` text-sm md:text-base text-grey-3 font-normal capitalize ${custom_secondDesc && custom_secondDesc} ${textContent_secondDesc || 'hidden'}`}
            >{textContent_secondDesc}</p>

        </header>
    )
}

export default Header;