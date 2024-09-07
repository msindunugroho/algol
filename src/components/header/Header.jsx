/* eslint-disable react/prop-types */

const Header = ({textContent_title, custom_title, textContent_firstDesc, custom_firstDesc, textContent_secondDesc, custom_secondDesc}) => {
    return(
        <header className={`mb-6 md:mb-12`}>
            <h1 
            className={` text-xl md:text-2xl text-grey-1 font-bold uppercase mb-1 md:mb-2 ${custom_title && custom_title} ${textContent_title || 'hidden'}`}
            >{textContent_title}</h1>
            <p
            className={` text-sm md:text-lg text-grey-3 capitalize font-medium ${custom_firstDesc && custom_firstDesc} ${textContent_firstDesc || 'hidden'}`}
            >{textContent_firstDesc}</p>
            <p
            className={` text-lg text-grey-4 font-normal capitalize ${custom_secondDesc && custom_secondDesc} ${textContent_secondDesc || 'hidden'}`}
            >{textContent_secondDesc}</p>

        </header>
    )
}

export default Header;