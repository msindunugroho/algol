/* eslint-disable react/prop-types */
const RandomSnapshot = ({onClick, credits, cooldown, isCooldown}) => {
    return(
        <div className="random_snapshot mt-4 w-full h-max flex flex-col justify-center items-center">
            <button 
                type="button" 
                className={`rounded-md text-white-1 overflow-hidden bg-gradient-to-bl from-tertiary-3 to-quaternary-3 cursor-pointer px-4 py-1 flex justify-center items-center gap-2 ${credits == 0 && "bg-gradient-to-bl from-tertiary-5 to-quaternary-5 text-white-5"}`} 
                onClick={
                    isCooldown?
                    () =>{
                        alert(`Cooldown in ${cooldown} second`)
                    }:
                    () => {onClick()}
                }>
                    <i className="bi bi-moon-stars"></i>
                    <span className="text-base capitalize font-medium">{
                        isCooldown? 
                        `Cooldown: ${cooldown}`:
                        `surprise me`
                        }</span>
            </button>
            <p className="text-white-1 text-sm capitalize font-medium">credits: {credits}</p>
        </div>
    );
}

export default RandomSnapshot;