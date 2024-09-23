import { Link } from "react-router-dom";
import assets from "../../assets/assets";

const Footer = () => {
    const { bg_footer, profile_picture } = assets.images;
    const { NASA_logo } = assets.svg;
    return(
        <footer>
            <div className="container_footer min-h-screen w-full mt-12 relative flex flex-col justify-end">
                <img src={bg_footer} alt="Find The Man In The Moon" className="w-full h-full absolute top-0 left-0 z-0 object-cover object-center"/>
                <div className="body_footer w-full h-full p-4 bg-gradient-to-b from-transparent_dark-0 via-transparent_dark-7 to-transparent_dark-9 flex flex-col justify-end relative z-[1]">
                    <div className="header_footer w-full py-4 border-solid border-b-2 border-grey-5 flex justify-between items-center">
                        <div className="brand flex-[1]">
                            <h1 className="text-clip_quaternary-tertiary text-4xl font-bold uppercase">algol</h1>
                        </div>
                        <ol className="links flex-[2] flex justify-end gap-2">
                            <li><Link to={"/"}><p className="text-sm text-grey-5 capitalize font-medium">home</p></Link></li>
                            <li><Link to={"/near-earth_objects"}><p className="text-sm text-grey-5 capitalize font-medium">NEO</p></Link></li>
                            <li><Link to={"/sun"}><p className="text-sm text-grey-5 capitalize font-medium">sun</p></Link></li>
                            <li><Link to={"/article"}><p className="text-sm text-grey-5 capitalize font-medium">article</p></Link></li>
                        </ol>
                    </div>
                    <div className="desc w-full p-4 relative z-[1] flex flex-col">
                        <div className="header w-full flex justify-center items-center gap-4">
                            <div className="nasa flex flex-col justify-center items-center gap-2">
                                <p className="text-sm text-grey-3 text-center font-medium capitalize">in collaboration with</p> 
                                <div className="colaboration_profile flex justify-center items-center gap-4">
                                <a href="" target="_blank" className="flex flex-col justify-center items-center gap-1">
                                    <img src={NASA_logo} alt="Nasa Logo" className="w-10 h-10 object-cover object-top" />
                                    <span className="text-xs text-grey-5 capitalize">NASA</span>
                                </a>
                                <a href="/" target="_blank" className="flex flex-col justify-center items-center gap-1">
                                    <img src={profile_picture} alt="Nasa Logo" className="w-10 h-10 object-cover object-top" />
                                    <span className="text-xs text-grey-5 capitalize">sindu</span>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;