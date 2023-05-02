import './App.css';
import PhotoCarousel from './components/PhotoCarousel';
import photos from './photos';
import InfoBox from './components/InfoBox';
import backgroundPhoto from "./images/background-high.jpg";


function App() {
  const carouselPhotos = photos;
  const carouselTitle = "Flask Warbler";

  return (
    <div className="App">

      <section className="container"
        id="intro"
      >
        <img src={backgroundPhoto} alt="background with cherry blossoms" />
        <h1>Hello World, I'm Christopher Chen</h1>
        <h2>Software Engineer</h2>
        <h3>New York, NY</h3>
      </section>

      <section className="container"
        id="about-me"
      >
        <h2>About me</h2>
      </section>

      <section className="container"
        id="skills"
      >
        <h2>Technical Skills</h2>

      </section>

      <section className="container"
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
