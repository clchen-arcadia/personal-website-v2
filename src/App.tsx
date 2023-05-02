import './App.css';
import PhotoCarousel from './components/PhotoCarousel';
import photos from './photos';
import InfoBox from './components/InfoBox';
import backgroundPhoto from "./images/background-high.jpg";
import portraitPhoto from "./images/portrait.jpeg";
import { aboutMeBlurb } from './copy';


function App() {
  const carouselPhotos = photos;
  const carouselTitle = "Flask Warbler";

  return (
    <div className="App">

      <section
        id="intro"
      >
        <img src={backgroundPhoto} alt="background with cherry blossoms" id="background" />
        <h1>Hello World, I'm Christopher Chen</h1>
        <h2 id="h2-1">Software Engineer</h2>
        <h2 id="h2-2">New York, NY</h2>
      </section>

      <section
        id="about-me"
      >
        <h2>About me</h2>

        <div id="about-blurb">
          <p>
            {`Hi there! I’m Christopher Chen and I’m a full stack software engineer. I’ve recently graduated from Rithm School’s coding bootcamp and am working on networking, applying to jobs, and building out my portfolio and new projects! \n\n`}

            {`Fun facts: My favorite show is BoJack Horseman. My favorite book is A Tree Grows In Brooklyn. And I love hiking, board games, and cooking!\n\n`}

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="https://www.linkedin.com/in/christopherlichen/">LinkedIn</a>
              </li>
              <li className="list-group-item">
                <a href="https://github.com/clchen-arcadia">GitHub</a>
              </li>
              <li className="list-group-item">
                <a href="mailto:clchen.arcadia@gmail.com">Email</a>
              </li>
            </ul>

          </p>
        </div>

        <img src={portraitPhoto} alt="A portrait of me" id="portrait" />
      </section>

      <section
        id="skills"
      >
        <h2>Technical Skills</h2>

        <section id="grid-logos">

          <section className="row">
            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />

            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />

            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          </section>

          <section className="row">
            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" />

            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          </section>

          <section className="row">
            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />

            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />

            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
          </section>

          <section className="row">

            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />

            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />

            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />

            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </section>

          <section className="row">
            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />

            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" />

            <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />

            <img style={{ visibility: "hidden" }} className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
          </section>

        </section>

      </section>

      <section
        id="projects"
      >
        <h2>Projects</h2>

        <div className="d-flex row">
          <div className="col-sm">
            <InfoBox
            />
          </div>

          <div className="col-sm">
            <PhotoCarousel
              photos={carouselPhotos}
              title={carouselTitle}
            />
          </div>
        </div>


      </section>

    </div>
  );
}




export default App;
