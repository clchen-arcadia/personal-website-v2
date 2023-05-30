import "./AboutSection.css";
import { aboutMeBlurb } from "../copy";
import resumePDF from "../Christopher_Chen_Resume.pdf";
import portraitPhoto from "../images/portrait.jpeg";

function AboutSection() {
    return (
        <section
            id="about-me"
        >
            <h2 className="font-link">About me</h2>

            <div id="about-blurb">
                <p>
                    {aboutMeBlurb}
                </p>
                <p>
                    <span><a href="https://www.linkedin.com/in/christopherlichen/">LinkedIn</a>  |  <a href="https://github.com/clchen-arcadia">GitHub</a>  |  <a href="mailto:clchen.arcadia@gmail.com">Email</a>  |  <a href={resumePDF}>Resume</a></span>
                </p>
            </div>

            <img src={portraitPhoto} alt="A portrait of me" id="portrait" />
        </section>
    );
}

export default AboutSection;
