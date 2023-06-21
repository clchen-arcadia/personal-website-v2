import './App.css';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';
import NavBar from './components/NavBar';

function App() {
  return (
    <div id="App">

      <NavBar />

      <IntroSection />

      <AboutSection />

      <SkillSection />

      <ProjectSection />

    </div>
  );
}

export default App;
