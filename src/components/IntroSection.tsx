import './IntroSection.css';
import backgroundPhoto from "../images/cherry-blossom-nyc-2.jpg";

/**
 * Renders the IntroSection component.
 *
 * App --> IntroSection
 *
 */

function IntroSection() {
    return (
        <section
            className="introSection d-flex align-items-center justify-content-center"
            id="intro"
        >
            <img
                className="introImage"
                src={backgroundPhoto}
                alt="background with cherry blossoms"
            />
            <div>
                <h1
                    className="font-link introHeading1 align-middle"
                >
                    Hello&nbsp;World,<br />I'm&nbsp;Christopher&nbsp;Chen
                </h1>

                <h2
                    className="font-link introHeading2"
                >
                    Software Engineer<br />New York, NY
                </h2>
            </div>
        </section>
    );
}

export default IntroSection;
