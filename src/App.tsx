import './App.css';
import PhotoCarousel from './components/PhotoCarousel';
import photos from './photos';
import InfoBox from './components/InfoBox';
import backgroundPhoto from "./images/background-high.jpg";
import portraitPhoto from "./images/portrait.jpeg";


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
        <h2>Software Engineer</h2>
        <h3>New York, NY</h3>
      </section>

      <section
        id="about-me"
      >
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur esse labore ipsum earum necessitatibus, eveniet numquam soluta perspiciatis maxime, quam ab in laudantium maiores, repellat eum voluptate pariatur ad ea?
        </p>
        <img src={portraitPhoto} alt="A portrait of me" id="portrait" />
      </section>

      <section
        id="skills"
      >
        <h2>Technical Skills</h2>

 
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
