/* eslint-disable react/prop-types */
/**
 *  - primary: [btn_primary, btn_primary_ln]
 *  - tertiary: [btn_tertiary, btn_tertiary_ln]
 *  - quaternary: [btn_quaternary, btn_quaternary_ln]
 *  
 *  
 */

export const Button = ({textContent, childern, btn_type, onClick}) => {
    return(
        <button 
            type="button" 
            className={`btn py-1 px-2 text-base font-medium md:text-lg capitalize rounded-md transition-colors duration-300 ease-out ${btn_type && btn_type}`}
            onClick={onClick && onClick}
            >{childern? childern : textContent}</button>
    )
}

export const AncButton = ({textContent, childern, btn_type, onClick, href, target}) => {
    return(
        <a 
            href={href}
            target={target || '_blank'}
            className={`btn py-1 px-2 text-base font-medium md:text-lg capitalize rounded-md transition-colors duration-300 ease-out ${btn_type && btn_type}`}
            onClick={onClick && onClick}
            >{childern? childern : textContent}</a>
    )
}

