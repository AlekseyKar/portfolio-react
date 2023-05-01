import "./css/main.css";

import vk from "./img/icons/vk.svg";
import instagram from "./img/icons/instagram.svg";
import twitter from "./img/icons/twitter.svg";
import linkedIn from "./img/icons/linkedIn.svg";
import gitHub from "./img/icons/gitHub.svg";

import Navbar from "./components/navbar/nav";

function App() {
  return (
    <div className="App">
      <Navbar />

      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>Hi, my name is <em>Aleks</em></strong><br />
              a frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating</p>
          </div>
          <a href="https://www.linkedin.com/in/aleks-kar/" className="btn" target="_blank" rel="noreferrer noopener">Download CV</a>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <a href="./project-page.html" className="projects__link">
                <img className="project__img" src="./img/projects/01.jpg" alt="pro-1" />
                  <h3 className="project__title">Gaming streaming portal</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project-page.html" className="projects__link">
                <img className="project__img" src="./img/projects/02.jpg" alt="pro-2" />
                  <h3 className="project__title">Video servise</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project-page.html" className="projects__link">
                <img className="project__img" src="./img/projects/03.jpg" alt="pro-3" />
                  <h3 className="project__title">Video portal</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project.html" className="projects__link">
                <img className="project__img" src="./img/projects/04.jpg" alt="pro-4" />
                  <h3 className="project__title">Dating app</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project.html" className="projects__link">
                <img className="project__img" src="./img/projects/05.jpg" alt="pro-5" />
                  <h3 className="project__title">Landing</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project.html" className="projects__link">
                <img className="project__img" src="./img/projects/06.jpg" alt="pro-6" />
                  <h3 className="project__title">Gaming community</h3>
              </a>
            </li>
          </ul>
        </div>
      </main>

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
                <a href="#!"
                ><img src={instagram} alt="Inst_Link" />
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
    </div>
  );
}

export default App;
