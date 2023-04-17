import "./Footer.css";
import vk from "./vk.svg";
import gitHub from "./gitHub.svg";
import instagram from "./instagram.svg";
import linkedIn from "./linkedIn.svg";
import twitter from "./twitter.svg";

const Footer = () => {
    return ( 
        
    <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <ul className="social">
                <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                <li className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></li>
                <li className="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
                <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
                <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
            </ul>
            <div className="copyright">
                <p>© 2022 frontend-dev.com</p>
            </div>
        </div>
    </div>
</footer>
     );
}
 
export default Footer;