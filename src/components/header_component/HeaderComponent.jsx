/* eslint-disable react/prop-types */
const HeaderComponent = ({heading_textcontent, desc_textcontent}) => {
    return(
        <header className="header_component my-1 sm:my-2 md:my-4">
            <h1 className='text-grey-1 text-2xl sm:text-3xl md:text-5xl uppercase font-extrabold'>{heading_textcontent}</h1>
            <p className="text-grey-3 text-sm sm:text-base md:text-lg">{desc_textcontent}</p>
        </header>
    )
}

export default HeaderComponent;