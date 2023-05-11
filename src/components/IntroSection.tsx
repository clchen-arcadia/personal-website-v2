import './IntroSection.css';
import backgroundPhoto from "../images/background-high.jpg";

function IntroSection() {
    return (
        <section
            id="intro"
        >
            <img src={backgroundPhoto} alt="background with cherry blossoms" id="background" />
            <h1>Hello World, I'm Christopher Chen</h1>
            <h2 id="h2-1">Software Engineer</h2>
            <h2 id="h2-2">New York, NY</h2>
        </section>
    );
}

export default IntroSection;
