import './NavBar.css';
import NavButtonScroll from './NavButtonScroll';
import resumePDF from "../Christopher_Chen_Resume.pdf";
import NavButtonExt from './NavButtonExt';

function NavBar() {
    const SCROLL_TUPLES = [
        ["intro", "Home"],
        ["about-me", "About"],
        ["skills", "Skills"],
        ["projects", "Projects"],
    ];
    const LINKS_EXT = [
        [
            // resumePDF,
            "https://www.linkedin.com/in/christopherlichen/",
            `bi bi-file-pdf`,
            `Resume`,
        ],
        [
            "https://www.linkedin.com/in/christopherlichen/",
            `devicon-github-original`,
            `GitHub`,
        ],
        [
            "https://github.com/clchen-arcadia",
            `devicon-linkedin-plain`,
            `LinkedIn`,
        ],
    ];

    return (
        <div className="navBar d-flex justify-content-between">
            <div className='d-flex align-items-center'
            >

                {
                    SCROLL_TUPLES.map(
                        (t, idx) => {
                            return (
                                <NavButtonScroll
                                    key={idx}
                                    idToScroll={t[0]}
                                    title={t[1]}
                                />
                            );
                        }
                    )
                }
            </div>

            <div className="d-flex align-items-bottom"
            >

                {
                    LINKS_EXT.map(
                        (t, idx) => {
                            return (
                                <NavButtonExt
                                    key={idx}
                                    linkExt={t[0]}
                                    iconClass={t[1]}
                                    title={t[2]}
                                />
                            );
                        }
                    )
                }

            </div>

        </div>
    );
}

export default NavBar;
