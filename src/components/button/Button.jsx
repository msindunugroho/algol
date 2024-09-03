/* eslint-disable react/prop-types */
const Button = ({textContent, btn_type, onClick}) => {
    return(
        <button 
            type="button" 
            className={`btn py-1 px-5 text-base font-medium md:text-lg capitalize rounded-md transition-colors duration-300 ease-out ${btn_type && btn_type}`}
            onClick={onClick && onClick}
            >{textContent}</button>
    )
}

export default Button;