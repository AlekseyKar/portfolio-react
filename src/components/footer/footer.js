import "./footer.css";

import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
  return ( 
    <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!">
                <img src={vk} alt="VK_Link" />
                </a>
              </li>

              <li className="social__item">
                <a href="#!">
                <img src={instagram} alt="Inst_Link" />
                </a>
              </li>

              <li className="social__item">
                <a href="#!">
                <img src={twitter} alt="Twit_Link" />
                </a>
              </li>

              <li className="social__item">
                <a href="#!">
                <img src={gitHub} alt="Git_Link" />
                </a>
              </li>

              <li className="social__item">
                <a href="#!">
                <img src={linkedIn} alt="Linked_Link" />
                </a>
              </li>
            </ul>

            <div className="copyright">
              <p> 2023 github.com/AlekseyKar </p>
            </div>
          </div>
        </div>
      </footer>
  );
}
 
export default Footer;