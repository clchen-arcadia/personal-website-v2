import './NavBar.css';
import NavButtonScroll from './NavButtonScroll';
import resumePDF from "../Christopher_Chen_Resume.pdf";
import pdfIcon from "../images/pdf-icon-4.png";
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
            resumePDF,
            pdfIcon,
            'resume pdf',
        ],
        [
            "https://www.linkedin.com/in/christopherlichen/",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg",
            'linkedin link',
        ],
        [
            "https://github.com/clchen-arcadia",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            'github link',
        ],
    ];

    return (
        <div className="navBar d-flex justify-content-between">
            <div className='d-flex'
            >

                {
                    SCROLL_TUPLES.map(
                        t => {
                            return (
                                <NavButtonScroll
                                    idToScroll={t[0]}
                                    title={t[1]}
                                />
                            );
                        }
                    )
                }
            </div>

            <div className="d-flex"
            >

                {
                    LINKS_EXT.map(
                        t => {
                            console.log(t[0]);
                            return (
                                <NavButtonExt
                                    linkExt={t[0]}
                                    iconSrc={t[1]}
                                    iconAlt={t[2]}
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
