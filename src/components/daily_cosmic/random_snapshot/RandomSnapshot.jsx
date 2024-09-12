/* eslint-disable react/prop-types */
const RandomSnapshot = ({onClick, credits}) => {
    return(
        <div className="random_snapshot mt-4 w-full h-max flex flex-col justify-center items-center">
            <button 
                type="button" 
                className="rounded-md overflow-hidden bg-gradient-to-bl from-tertiary-3 to-quaternary-3 cursor-pointer px-4 py-1 flex justify-center items-center gap-2" 
                onClick={() => {onClick()}}>
            <i className="bi bi-moon-stars text-white-1"></i>
            <span className="text-white-1 text-base capitalize font-medium">surprise me</span>
            </button>
            <p className="text-white-1 text-sm capitalize font-medium">credits: {credits}</p>
        </div>
    );
}

export default RandomSnapshot;