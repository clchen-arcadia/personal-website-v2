import "./ProjectSection.css";
import { photos, photos2 } from '../photos';
import PhotoCarousel from "./PhotoCarousel";

function ProjectSection() {
    return (
        <section
            className="projectSection d-flex justify-content-center"
            id="projects"
        >
            <h2
                className="font-link projectHeading"
            >
                Projects
            </h2>

            <div
                className="projectBlurb"
                id="warbler-blurb"
            >
                <h4>Warbler</h4>
                <p>
                    {`A Twitter clone built in Flask Python, SQLAlchemy, and PostgreSQL`}
                </p>
                <a href="https://github.com/clchen-arcadia/flask-warbler">GitHub Repo</a>
            </div>

            <div
                className="projectCarousel"
                id="warbler-carousel"
            >
                <PhotoCarousel
                    photos={photos}
                    title={"Warbler"}
                />
            </div>


            <div
                className="projectCarousel"
                id="jobly-blurb"
            >
                <h4>Jobly</h4>
                <p>
                    {`A job board site built in React.js, Express.js, and PostgreSQL`}
                </p>
                <p><a href="https://github.com/clchen-arcadia/react-jobly">GitHub Repo Frontend</a> | <a href="https://github.com/clchen-arcadia/express-jobly">GitHub Repo Backend</a></p>
            </div>

            <div
                className="projectCarousel"
                id="jobly-carousel"
            >
                <PhotoCarousel
                    photos={photos2}
                    title={"Jobly"}
                />
            </div>

        </section>
    );
}

export default ProjectSection;
