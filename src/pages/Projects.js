import "./projects.css";

import project01 from "./../img/projects/01.jpg";
import project02 from "./../img/projects/02.jpg";
import project03 from "./../img/projects/03.jpg";
import project04 from "./../img/projects/04.jpg";
import project05 from "./../img/projects/05.jpg";
import project06 from "./../img/projects/06.jpg";

const Projects = () => {
  return (
    <main class="section">
      <div class="container">
        <h2 class="title-1">Projects</h2>
        <ul class="projects">
          <li class="project">
            <a href={project01} class="projects__link">
              <img class="project__img" src="./img/projects/01.jpg" alt="pro-1" />
              <h3 class="project__title">Gaming streaming portal</h3>
            </a>
          </li>

          <li class="project">
            <a href={project02} class="projects__link">
              <img class="project__img" src="./img/projects/02.jpg" alt="pro-2" />
              <h3 class="project__title">Video servise</h3>
            </a>
          </li>

          <li class="project">
            <a href={project03} class="projects__link">
              <img class="project__img" src="./img/projects/03.jpg" alt="pro-3" />
              <h3 class="project__title">Video portal</h3>
            </a>
          </li>

          <li class="project">
            <a href={project04} class="projects__link">
              <img class="project__img" src="./img/projects/04.jpg" alt="pro-4" />
              <h3 class="project__title">Dating app</h3>
            </a>
          </li>

          <li class="project">
            <a href={project05} class="projects__link">
              <img class="project__img" src="./img/projects/05.jpg" alt="pro-5" />
              <h3 class="project__title">Landing</h3>
            </a>
          </li>

          <li class="project">
            <a href={project06} class="projects__link">
              <img class="project__img" src="./img/projects/06.jpg" alt="pro-6" />
              <h3 class="project__title">Gaming community</h3>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
 
export default Projects;