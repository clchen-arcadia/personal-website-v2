import './App.css';
import PhotoCarousel from './components/PhotoCarousel';
import photos from './photos';


function App() {
  const carouselPhotos = photos;
  const carouselTitle = "Flask Warbler"

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Projects</h2>
      <PhotoCarousel photos={carouselPhotos} title={carouselTitle} />
    </div>
  );
}




export default App;
