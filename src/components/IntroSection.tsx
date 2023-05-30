import './IntroSection.css';
import backgroundPhoto from "../images/cherry-blossom-nyc-2.jpg";

/**
 * Renders the IntroSection component.
 *
 * App --> IntroSection
 *
 * Props: height, width
 */

function IntroSection() {

    return (
        <section
            id="intro"
            className="d-flex justify-content-center align-items-center"
        >
            <img src={backgroundPhoto} alt="background with cherry blossoms" id="background"
            />
            <h1 className="font-link" >Hello World, I'm Christopher Chen</h1>
            <h2 className="font-link" id="h2-1">Software Engineer<br />New York, NY</h2>
            {/* <h2 className="font-link" id="h2-2">New York, NY</h2> */}
        </section>
    );
}

export default IntroSection;
