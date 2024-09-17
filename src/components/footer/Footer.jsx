import { Link } from "react-router-dom";
import assets from "../../assets/assets";

const Footer = () => {
    const {NASA_logo, bg_footer} = assets.images;
    return(
        <footer>
            <div className="container_footer min-h-screen w-full relative">
                <img src={bg_footer} alt="Find The Man In The Moon" />
                <div className="footer_links w-full ">
                    <div className="brand">
                        <h1>algol</h1>
                    </div>
                    <ol className="links flex">
                        <li><Link><p>home page</p></Link></li>
                        <li><Link><p>asteroid</p></Link></li>
                        <li><Link><p>sun</p></Link></li>
                        <li><Link><p>article</p></Link></li>
                    </ol>
                </div>
                <div className="desc">
                    <div className="header"><h1>data provided by</h1> <a href="http://" target="_blank"><img src={NASA_logo} alt="Nasa Logo" /></a></div>
                    <p>Data provided by NASA API, including Near-Earth Object Web Service (NeoWs) and Solar Dynamics Observatory (SDO).</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;