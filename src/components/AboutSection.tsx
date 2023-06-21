import "./AboutSection.css";
import { aboutMeBlurb } from "../copy";
import resumePDF from "../Christopher_Chen_Resume.pdf";
import portraitPhoto from "../images/portrait.jpeg";

function AboutSection() {
    return (
        <section
            className="aboutSection d-flex justify-content-center"
            id="about-me"
        >
            <h2
                className="font-link aboutHeading"
            >
                About me
            </h2>
            <div
                className="aboutContainer d-flex align-items-center"
            >
                <div className="aboutBlurb mx-3">
                    <p>
                        {aboutMeBlurb}
                    </p>
                    <p>
                        <span>
                            <a
                                href="https://www.linkedin.com/in/christopherlichen/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                LinkedIn
                            </a>
                            {"  |  "}
                            <a
                                href="https://github.com/clchen-arcadia"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                GitHub
                            </a>
                            {"  |  "}
                            <a
                                href="mailto:clchen.arcadia@gmail.com"
                            >
                                Email
                            </a>
                            {"  |  "}
                            <a
                                href={resumePDF}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Resume
                            </a>
                        </span>
                    </p>
                </div>
                <img
                    className="aboutPortrait mx-3"
                    src={portraitPhoto}
                    alt="A portrait of me"
                />
            </div>
        </section>
    );
}

export default AboutSection;
