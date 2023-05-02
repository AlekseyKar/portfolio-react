import Header from "./../components/header/header";

const Home = () => {
  return (
    <>
      <Header />
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
    </>
  );
}
 
export default Home;